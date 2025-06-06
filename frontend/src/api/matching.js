import { calculateDistance } from "./utils/geo.js";
import { supabase } from "../lib/supabase.js";

/**
 * Finds potential matches for a given farmer.
 * It queries for active recipients and calculates a match score based on various criteria.
 * @param {string} farmerId - The ID of the farmer.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of potential matches, sorted by score.
 * @throws {Error} If there is an error fetching data or if the farmer is not found/invalid.
 */
export async function findMatches(farmerId) {
  try {
    // Get the farmer's record with profile data
    const { data: farmer, error: farmerError } = await supabase
      .from("farmers")
      .select(
        `
        *,
        profile:profiles!inner(
          id,
          user_type,
          lat,
          lng,
          address,
          city,
          state,
          zip_code,
          organization_name,
          contact_name,
          phone,
          email
        )
      `
      )
      .eq("id", farmerId)
      .single();

    if (farmerError)
      throw new Error(`Error fetching farmer record: ${farmerError.message}`);
    if (!farmer) throw new Error("Farmer not found");
    if (!farmer.profile) throw new Error("Farmer profile not found");
    if (farmer.profile.user_type !== "farmer")
      throw new Error("User is not a farmer");

    // Get all active recipients with their profiles
    const { data: recipients, error: recipientsError } = await supabase
      .from("recipients")
      .select(
        `
      *,
        profile:profiles!inner(
          id,
          user_type,
          lat,
          lng,
          address,
          city,
          state,
          zip_code,
          organization_name,
          contact_name,
          phone,
          email
        )
      `
      )
      .eq("active", true);

    if (recipientsError)
      throw new Error(
        `Error fetching active recipients: ${recipientsError.message}`
      );
    if (!recipients) return []; // No recipients found, return empty array

    const potentialMatches = [];

    for (const recipient of recipients) {
      // Skip if items are already matched (considering both farmer and recipient sides)
      const alreadyMatched = await areItemsAlreadyMatched(
        farmerId,
        recipient.id
      );
      if (alreadyMatched) {
        continue;
      }

      const matchScore = calculateMatchScore(farmer, recipient);

      // Add all calculated matches to potentialMatches, regardless of score
      potentialMatches.push({
        farmer_id: farmer.id,
        recipient_id: recipient.id,
        match_score: matchScore,
        match_reasons: getMatchReasons(farmer, recipient, matchScore),
        // Include basic farmer and recipient info for display
        farmer: {
          id: farmer.id,
          address: farmer.profile.address,
          city: farmer.profile.city,
          state: farmer.profile.state,
          zip_code: farmer.profile.zip_code,
          organization_name:
            farmer.profile.organization_name || "Unnamed Farmer",
          contact_name: farmer.profile.contact_name,
          phone: farmer.profile.phone,
          email: farmer.profile.email,
        },
        recipient: {
          id: recipient.id,
          address: recipient.profile.address,
          city: recipient.profile.city,
          state: recipient.profile.state,
          zip_code: recipient.profile.zip_code,
          organization_name:
            recipient.profile.organization_name || "Unnamed Organization",
          contact_name: recipient.profile.contact_name,
          phone: recipient.profile.phone,
          email: recipient.profile.email,
        },
      });
    }

    // Sort potential matches by score in descending order and return top 10
    return potentialMatches
      .sort((a, b) => b.match_score - a.match_score)
      .slice(0, 10);
  } catch (error) {
    console.error("Error in findMatches:", error.message);
    throw error; // Re-throw the error for the caller to handle
  }
}

/**
 * Creates a new match record and updates user statuses.
 * @param {string} farmerId - The ID of the farmer.
 * @param {string} recipientId - The ID of the recipient.
 * @param {number} matchScore - The match score.
 * @param {object} matchReasons - Details about the match reasons.
 * @returns {Promise<object>} - A promise that resolves to the created match record.
 * @throws {Error} If there is an error inserting the match or sending notifications.
 */
export async function createMatch(
  farmerId,
  recipientId,
  matchScore,
  matchReasons
) {
  try {
    // Insert the new match record
    const { data: match, error: insertError } = await supabase
      .from("matches")
      .insert({
        farmer_id: farmerId,
        recipient_id: recipientId,
        match_score: matchScore,
        status: "pending", // Initial overall status is pending
        match_reasons: matchReasons,
        // Initialize boolean accepted flags to NULL (or false, depending on desired initial state)
        farmer_accepted: null, // Assuming NULL initially
        recipient_accepted: null, // Assuming NULL initially
      })
      .select()
      .single(); // Expecting a single newly created row

    if (insertError)
      throw new Error(`Error inserting match record: ${insertError.message}`);

    // Send notifications (assuming sendMatchNotification is implemented elsewhere)
    // Ensure sendMatchNotification can handle a match record with NULL accepted flags initially
    await sendMatchNotification(match.id);

    return match; // Return the created match record
  } catch (error) {
    console.error("Error in createMatch:", error.message);
    throw error; // Re-throw the error
  }
}

/**
 * Updates the status of a match.
 * @param {string} matchId - The ID of the match to update.
 * @param {string} status - The new status ('accepted', 'rejected', etc.).
 * @param {string} userId - The ID of the user performing the update (farmer_id or recipient_id).
 * @returns {Promise<object>} - A promise that resolves to the updated match record.
 * @throws {Error} If the match is not found, user is unauthorized, or update fails.
 */
export async function updateMatchStatus(matchId, status, userId) {
  try {
    // Verify user has permission to update this match and fetch match details
    const { data: matches, error: fetchError } = await supabase
      .from("matches")
      .select(
        `
        id,
        farmer_id,
        recipient_id,
        farmer:farmers(profile_id),
        recipient:recipients(profile_id)
        `
      )
      .eq("id", matchId);

    if (fetchError)
      throw new Error(
        `Error fetching match for permission check: ${fetchError.message}`
      );
    if (!matches || matches.length !== 1)
      throw new Error("Match not found or multiple matches returned.");
    const match = matches[0]; // Get the single match object from the array

    // Determine if the user is the farmer or recipient in this match
    const userProfileId = await getProfileIdFromUserId(userId); // Helper to get profile_id from farmer/recipient ID
    const isFarmer = match.farmer.profile_id === userProfileId;
    const isRecipient = match.recipient.profile_id === userProfileId;

    if (!isFarmer && !isRecipient)
      throw new Error("Unauthorized to update this match.");

    // Update match status and user response
    // Determine the boolean value based on the requested status
    const acceptedStatus = status === "accepted"; // true if status is 'accepted', false otherwise

    const updatePayload = {
      updated_at: new Date().toISOString(),
    };

    if (isFarmer) {
      updatePayload.farmer_accepted = acceptedStatus;
    } else if (isRecipient) {
      updatePayload.recipient_accepted = acceptedStatus;
    }

    const { data: updatedMatch, error: updateError } = await supabase
      .from("matches")
      .update(updatePayload)
      .eq("id", matchId)
      .select() // Select the updated row to check both accepted flags
      .single(); // Expecting the single updated row

    if (updateError)
      throw new Error(`Error updating match status: ${updateError.message}`);

    // Check if both parties have accepted and update overall status
    if (
      updatedMatch.farmer_accepted === true &&
      updatedMatch.recipient_accepted === true
    ) {
      const { error: statusUpdateError } = await supabase
        .from("matches")
        .update({ status: "accepted" })
        .eq("id", matchId);

      if (statusUpdateError) {
        console.error(
          "Error updating overall match status to accepted:",
          statusUpdateError.message
        );
      }
    } else if (status === "rejected") {
      // If either party rejects, set overall status to rejected
      const { error: statusUpdateError } = await supabase
        .from("matches")
        .update({ status: "rejected" })
        .eq("id", matchId);

      if (statusUpdateError) {
        console.error(
          "Error updating overall match status to rejected:",
          statusUpdateError.message
        );
      }
    }

    // Send notification about status update (assuming sendMatchStatusNotification is implemented elsewhere)
    // Pass the updatedMatch record which includes the latest accepted flags and overall status
    await sendMatchStatusNotification(updatedMatch, status, isFarmer);

    return updatedMatch; // Return the updated match record
  } catch (error) {
    console.error("Error in updateMatchStatus:", error.message);
    throw error; // Re-throw the error
  }
}

/**
 * Gets active matches for a given user (farmer or recipient).
 * @param {string} userId - The ID of the user (farmer_id or recipient_id).
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of active match records.
 * @throws {Error} If the user ID is invalid or there is an error fetching matches.
 */
export async function getActiveMatches(userId) {
  try {
    // Identify user type and get profile ID
    const { userType } = await getProfileAndUserType(userId);

    const query = supabase
      .from("matches")
      .select(
        `
        *,
        farmer:farmers(*, profile:profiles(*)),
        recipient:recipients(*, profile:profiles(*))
      `
      )
      .in("status", ["pending", "accepted"]); // Only get pending or accepted matches

    // Filter matches by farmer_id or recipient_id based on user type
    if (userType === "farmer") {
      query.eq("farmer_id", userId);
    } else if (userType === "organization") {
      // Assuming recipient user type is 'organization'
      query.eq("recipient_id", userId);
    } else {
      throw new Error("Invalid user type.");
    }

    const { data: matches, error: matchesError } = await query;

    if (matchesError)
      throw new Error(`Error fetching active matches: ${matchesError.message}`);

    return matches || []; // Return the array of matches (or empty array if none)
  } catch (error) {
    console.error("Error in getActiveMatches:", error.message);
    throw error; // Re-throw the error
  }
}

// --- Helper Functions ---

/**
 * Calculates a match score between a farmer and a recipient.
 * @param {object} farmer - The farmer record.
 * @param {object} recipient - The recipient record.
 * @returns {number} - The calculated match score (0-100).
 */
function calculateMatchScore(farmer, recipient) {
  let score = 0;
  const weights = {
    distance: 30,
    foodTypes: 25,
    logistics: 20,
    schedule: 15,
    urgency: 10,
  };

  // Distance score (30 points max)
  const distance = calculateDistance(
    farmer.profile.lat,
    farmer.profile.lng,
    recipient.profile.lat,
    recipient.profile.lng
  );

  // Award distance points based on delivery/pickup capability and distance
  if (farmer.delivery_capability && distance <= farmer.delivery_radius) {
    score += weights.distance;
  } else if (
    recipient.transportation_available &&
    distance <= recipient.pickup_radius
  ) {
    score += weights.distance;
  } else if (distance <= 10) {
    // Bonus for close proximity even without explicit capability
    score += weights.distance * 0.5;
  }

  // Food type matching (25 points max)
  const farmerCrops = farmer.crop_types || [];
  const neededFoods = recipient.needed_food_types || [];
  const matchingTypes = farmerCrops.filter((crop) =>
    neededFoods.some((need) => {
      // Handle potential variations in naming
      if (crop === "Vegetables" && need === "Fresh Vegetables") return true;
      if (crop === "Fruits" && need === "Fresh Fruits") return true;
      return crop === need; // Direct match
    })
  );

  // Calculate score based on the proportion of needed food types that match farmer's crops
  score +=
    (neededFoods.length > 0 ? matchingTypes.length / neededFoods.length : 0) *
    weights.foodTypes;

  // Logistics compatibility (20 points max)
  if (farmer.delivery_capability || recipient.transportation_available) {
    score += weights.logistics;
  }

  // Schedule matching (15 points max)
  const farmerDays = farmer.available_days || [];
  const recipientDays = recipient.preferred_delivery_days || [];
  const matchingDays = farmerDays.filter((day) => recipientDays.includes(day));

  // Calculate score based on the proportion of recipient's preferred days that match farmer's available days
  score +=
    (recipientDays.length > 0
      ? matchingDays.length / recipientDays.length
      : 0) * weights.schedule;

  // Urgency bonus (10 points max)
  const urgencyMultiplier = {
    Critical: 1,
    High: 0.7,
    Medium: 0.4,
    Low: 0.1,
  };

  score += weights.urgency * (urgencyMultiplier[recipient.urgency_level] || 0);

  return Math.round(Math.max(0, Math.min(100, score))); // Ensure score is between 0 and 100
}

/**
 * Generates reasons for a match based on compatibility factors.
 * @param {object} farmer - The farmer record.
 * @param {object} recipient - The recipient record.
 * @param {number} score - The match score.
 * @returns {object} - An object containing match details and reasons.
 */
function getMatchReasons(farmer, recipient, score) {
  const reasons = [];

  // Add specific reasons for the match
  const distance = calculateDistance(
    farmer.profile.lat,
    farmer.profile.lng,
    recipient.profile.lat,
    recipient.profile.lng
  );

  if (distance <= 5) {
    reasons.push(`Very close proximity (${distance.toFixed(1)} miles)`);
  } else {
    reasons.push(`Distance: ${distance.toFixed(1)} miles`);
  }

  // Food type match reasons
  const farmerCrops = farmer.crop_types || [];
  const neededFoods = recipient.needed_food_types || [];
  const matchingTypes = farmerCrops.filter((crop) =>
    neededFoods.includes(crop)
  );
  if (matchingTypes.length > 0) {
    reasons.push(`Matching food types: ${matchingTypes.join(", ")}`);
  }

  // Logistics reasons
  if (farmer.delivery_capability) {
    reasons.push("Farmer offers delivery");
  } else if (recipient.transportation_available) {
    reasons.push("Recipient can arrange pickup");
  } else {
    reasons.push("Logistics may need coordination");
  }

  // Schedule reasons
  const farmerDays = farmer.available_days || [];
  const recipientDays = recipient.preferred_delivery_days || [];
  const matchingDays = farmerDays.filter((day) => recipientDays.includes(day));
  if (matchingDays.length > 0) {
    reasons.push(`Matching preferred days: ${matchingDays.join(", ")}`);
  }

  // Urgency reason
  if (recipient.urgency_level && recipient.urgency_level !== "Low") {
    reasons.push(`Recipient urgency: ${recipient.urgency_level}`);
  }

  // Add more specific reasons as needed...

  return {
    score,
    reasons,
    distance: parseFloat(distance.toFixed(1)),
    farmer_delivery: farmer.delivery_capability,
    recipient_pickup: recipient.transportation_available,
    urgency_level: recipient.urgency_level,
    farmer_crops: farmerCrops,
    needed_foods: neededFoods,
  };
}

/**
 * Helper function to identify user type (farmer/organization) and get profile ID from farmer/recipient ID.
 * Queries farmers and recipients tables to find the user.
 * @param {string} userId - The ID of the user (farmer_id or recipient_id).
 * @returns {Promise<{profileId: string, userType: string}>} - A promise that resolves to an object with profileId and userType.
 * @throws {Error} If the user ID is invalid or not found in farmers/recipients tables.
 */
async function getProfileAndUserType(userId) {
  // Check if the userId exists in the farmers table
  const { data: farmerRecord, error: farmerError } = await supabase
    .from("farmers")
    .select("id, profile_id")
    .eq("id", userId)
    .single();

  if (farmerError && farmerError.code !== "PGRST116") {
    // PGRST116 means no row found
    throw new Error(`Error querying farmers table: ${farmerError.message}`);
  }

  if (farmerRecord) {
    return { profileId: farmerRecord.profile_id, userType: "farmer" };
  }

  // If not a farmer, check if the userId exists in the recipients table
  const { data: recipientRecord, error: recipientError } = await supabase
    .from("recipients")
    .select("id, profile_id")
    .eq("id", userId)
    .single();

  if (recipientError && recipientError.code !== "PGRST116") {
    // PGRST116 means no row found
    throw new Error(
      `Error querying recipients table: ${recipientError.message}`
    );
  }

  if (recipientRecord) {
    return { profileId: recipientRecord.profile_id, userType: "organization" }; // Assuming recipient user type is 'organization'
  }

  // If the ID is not found in either table
  throw new Error(
    "Invalid user ID provided: ID not found in farmers or recipients tables."
  );
}

/**
 * Helper function to get profile ID from a farmer or recipient ID.
 * Used in updateMatchStatus for permission check.
 * @param {string} userId - The ID of the user (farmer_id or recipient_id).
 * @returns {Promise<string>} - A promise that resolves to the profile ID.
 * @throws {Error} If the user ID is invalid or not found.
 */
async function getProfileIdFromUserId(userId) {
  const { profileId } = await getProfileAndUserType(userId);
  return profileId;
}

/**
 * Helper function to check if items are already matched (accepted status) between a farmer and recipient.
 * @param {string} farmerId - The ID of the farmer.
 * @param {string} recipientId - The ID of the recipient.
 * @returns {Promise<boolean>} - True if an accepted match exists, false otherwise.
 */
async function areItemsAlreadyMatched(farmerId, recipientId) {
  try {
    const { data: existingMatches, error } = await supabase
      .from("matches")
      .select("farmer_id, recipient_id, status")
      .or(
        `and(farmer_id.eq.${farmerId},status.in.(accepted,pending)),and(recipient_id.eq.${recipientId},status.in.(accepted,pending))`
      );

    if (error)
      throw new Error(`Error checking for existing matches: ${error.message}`);

    return existingMatches && existingMatches.length > 0;
  } catch (error) {
    console.error("Error in areItemsAlreadyMatched:", error.message);
    throw error; // Re-throw
  }
}

/**
 * Creates a recipient record for a given profile ID.
 * This function is primarily for testing or initial data setup.
 * It should ideally be handled during user registration.
 * @param {string} profileId - The ID of the profile.
 * @returns {Promise<object>} - A promise that resolves to the created recipient record.
 * @throws {Error} If there is an error inserting the record.
 * @deprecated This should ideally be handled during user registration.
 */
export async function createRecipientRecord(profileId) {
  try {
    const { data: recipient, error } = await supabase
      .from("recipients")
      .insert({
        profile_id: profileId,
        status: "active",
        needed_food_types: [], // You can update these later
        urgency_level: "Medium",
        transportation_available: false,
        pickup_radius: 10, // in miles
        preferred_delivery_days: [], // You can update these later
      })
      .select()
      .single(); // Expecting a single newly created row

    if (error)
      throw new Error(`Error creating recipient record: ${error.message}`);

    return recipient;
  } catch (error) {
    console.error("Error in createRecipientRecord:", error.message);
    throw error; // Re-throw
  }
}

// --- Placeholder Notification Functions (Implement these fully in your backend) ---

/**
 * Sends a notification (e.g., SMS) about a new match.
 * This is a placeholder and should call your backend notification service.
 * @param {string} matchId - The ID of the created match.
 */
async function sendMatchNotification(matchId) {
  console.log(
    `[Notification] Attempting to send match notification for match ID: ${matchId}`
  );

  try {
    // 1. Fetch Match Details
    const { data: match, error: matchError } = await supabase
      .from("matches")
      .select("id, farmer_id, recipient_id, match_score")
      .eq("id", matchId)
      .single();

    if (matchError)
      throw new Error(`Error fetching match details: ${matchError.message}`);
    if (!match) throw new Error("Match not found.");

    // 2. Fetch Profile IDs from Farmer and Recipient tables
    const { data: farmerRecord, error: farmerRecordError } = await supabase
      .from("farmers")
      .select("profile_id")
      .eq("id", match.farmer_id)
      .single();

    if (farmerRecordError)
      throw new Error(
        `Error fetching farmer record for profile ID: ${farmerRecordError.message}`
      );
    if (!farmerRecord) throw new Error("Farmer record not found for match.");

    const { data: recipientRecord, error: recipientRecordError } =
      await supabase
        .from("recipients")
        .select("profile_id")
        .eq("id", match.recipient_id)
        .single();

    if (recipientRecordError)
      throw new Error(
        `Error fetching recipient record for profile ID: ${recipientRecordError.message}`
      );
    if (!recipientRecord)
      throw new Error("Recipient record not found for match.");

    const farmerProfileId = farmerRecord.profile_id;
    const recipientProfileId = recipientRecord.profile_id;

    // 3. Fetch Profile Details using Profile IDs
    const { data: profiles, error: profilesError } = await supabase
      .from("profiles")
      .select(
        "id, phone, whatsapp, email, notification_preferences, organization_name, contact_name, address, city, state"
      )
      .in("id", [farmerProfileId, recipientProfileId]);

    // Fetch additional farmer and recipient details
    const { data: farmerDetails } = await supabase
      .from("farmers")
      .select(
        "crop_types, delivery_capability, delivery_radius, available_days"
      )
      .eq("id", match.farmer_id)
      .single();

    const { data: recipientDetails } = await supabase
      .from("recipients")
      .select(
        "needed_food_types, urgency_level, transportation_available, pickup_radius, preferred_delivery_days"
      )
      .eq("id", match.recipient_id)
      .single();

    if (profilesError)
      throw new Error(
        `Error fetching profiles for notification: ${profilesError.message}`
      );
    if (!profiles || profiles.length !== 2)
      throw new Error("Could not fetch both farmer and recipient profiles.");

    const farmerProfile = profiles.find((p) => p.id === farmerProfileId);
    const recipientProfile = profiles.find((p) => p.id === recipientProfileId);

    if (!farmerProfile || !recipientProfile)
      throw new Error("Could not match profiles to farmer/recipient IDs."); // This error message might be slightly misleading now, but indicates a data inconsistency

    // --- Debugging Logs ---
    console.log("[Notification Debug] Fetched profiles:", profiles);
    console.log("[Notification Debug] Farmer Profile:", farmerProfile);
    console.log("[Notification Debug] Recipient Profile:", recipientProfile);
    // --- End Debugging Logs ---

    // Helper to clean and format phone numbers to E.164 (e.g., +16475551234)
    const formatPhoneNumber = (number) => {
      if (!number) return null;
      // Remove non-digit characters and leading/trailing spaces
      const cleaned = number.replace(/[^\d+]/g, "").trim();
      // Basic check: if it doesn't start with +, assume +1 and add it
      if (cleaned.length > 10 && !cleaned.startsWith("+")) {
        return `+1${cleaned}`;
      } else if (cleaned.length === 10 && !cleaned.startsWith("+")) {
        // Assume 10-digit is US/Canada, add +1
        return `+1${cleaned}`;
      } else if (cleaned.startsWith("+") && cleaned.length >= 11) {
        // Already has country code and enough digits
        return cleaned;
      }
      // Otherwise, return null or original if formatting is unclear/invalid
      console.warn(
        `[Notification Debug] Could not confidently format phone number: ${number}`
      );
      return null; // Or return cleaned if you want to send potentially unformatted numbers
    };

    const formattedFarmerPhone = formatPhoneNumber(farmerProfile.phone);
    const formattedFarmerWhatsapp = formatPhoneNumber(farmerProfile.whatsapp);
    const formattedRecipientPhone = formatPhoneNumber(recipientProfile.phone);
    const formattedRecipientWhatsapp = formatPhoneNumber(
      recipientProfile.whatsapp
    );

    // 4. Prepare Notification Data
    const notificationPayload = {
      matchId: match.id,
      farmer: {
        id: match.farmer_id,
        address: farmerProfile.address,
        city: farmerProfile.city,
        state: farmerProfile.state,

        phone: formattedFarmerPhone,
        whatsapp: formattedFarmerWhatsapp,
        email: farmerProfile.email,
        preferences: farmerProfile.notification_preferences || {},
        organizationName: farmerProfile.organization_name || "Unnamed Farm",
        contactName: farmerProfile.contact_name,
        foodDetails: {
          cropTypes: farmerDetails?.crop_types || [],
          deliveryCapability: farmerDetails?.delivery_capability,
          deliveryRadius: farmerDetails?.delivery_radius,
          availableDays: farmerDetails?.available_days || [],
        },
      },
      recipient: {
        id: match.recipient_id,
        address: recipientProfile.address,
        city: recipientProfile.city,
        state: recipientProfile.state,
        phone: formattedRecipientPhone,
        whatsapp: formattedRecipientWhatsapp,
        email: recipientProfile.email,
        preferences: recipientProfile.notification_preferences || {},
        organizationName:
          recipientProfile.organization_name || "Unnamed Organization",
        contactName: recipientProfile.contact_name,
        foodDetails: {
          neededFoodTypes: recipientDetails?.needed_food_types || [],
          urgencyLevel: recipientDetails?.urgency_level,
          transportationAvailable: recipientDetails?.transportation_available,
          pickupRadius: recipientDetails?.pickup_radius,
          preferredDeliveryDays:
            recipientDetails?.preferred_delivery_days || [],
        },
      },
    };

    // --- Debugging Logs ---
    console.log(
      "[Notification Debug] Payload sent to backend:",
      notificationPayload
    );
    // --- End Debugging Logs ---

    // 5. Call Backend Endpoint
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
    const notificationEndpoint = `${backendApiUrl}/api/send-match-notification`;

    const response = await fetch(notificationEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notificationPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Backend notification failed: ${response.status} - ${
          errorData.error || response.statusText
        }`
      );
    }

    console.log(
      `[Notification] Match notification successfully sent for match ID: ${matchId}`
    );
  } catch (error) {
    console.error("Error sending match notification:", error.message);
    // Depending on requirements, you might want to log this error to a monitoring service
  }
}

/**
 * Sends a notification (e.g., SMS) about a match status update.
 * This is a placeholder and should call your backend notification service.
 * @param {object} match - The updated match record.
 * @param {string} status - The new status ('accepted' or 'rejected').
 * @param {boolean} isFarmer - True if the user updating is the farmer, false if recipient.
 */
async function sendMatchStatusNotification(match, status, isFarmer) {
  console.log(
    `[Notification Placeholder] Sending match status notification for match ID: ${match.id}, status: ${status}, isFarmer: ${isFarmer}`
  );
  // TODO: Implement actual notification logic (e.g., call backend Twilio endpoint)
}
