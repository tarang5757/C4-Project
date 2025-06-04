import { supabase } from "../lib/supabase.js";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

async function sendNotificationWithRetry(profile, title, body, retryCount = 0) {
  try {
    const promises = [];
    const notificationPreferences = profile.notification_preferences || {
      sms: true,
      whatsapp: true,
      email: true,
    };

    // Send SMS if enabled and phone number exists
    if (notificationPreferences.sms && profile.phone) {
      promises.push(
        fetch(`${API_URL}/api/send-notification`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phoneNumber: profile.phone,
            message: `${title}\n\n${body}`,
            type: "sms",
          }),
        })
      );
    }

    // Send WhatsApp if enabled and number exists
    if (notificationPreferences.whatsapp && profile.whatsapp) {
      promises.push(
        fetch(`${API_URL}/api/send-notification`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phoneNumber: profile.whatsapp,
            message: `${title}\n\n${body}`,
            type: "whatsapp",
          }),
        })
      );
    }

    // Send email if enabled and email exists
    if (notificationPreferences.email && profile.email) {
      // TODO: Implement email sending
      console.log(`Would send email to ${profile.email}: ${title}\n${body}`);
    }

    await Promise.all(promises);
    return true;
  } catch (error) {
    console.error(
      `Notification send failed (attempt ${retryCount + 1}):`,
      error
    );

    if (retryCount < MAX_RETRIES) {
      await new Promise((resolve) =>
        setTimeout(resolve, RETRY_DELAY * (retryCount + 1))
      );
      return sendNotificationWithRetry(profile, title, body, retryCount + 1);
    }

    // Log failed notification for manual review
    await supabase.from("failed_notifications").insert({
      profile_id: profile.id,
      title,
      body,
      error: error.message,
      retry_count: retryCount,
    });

    return false;
  }
}

export async function sendMatchNotification(matchId) {
  // Get match details
  const { data: match } = await supabase
    .from("matches")
    .select(
      `
      *,
      farmer:farmers(*, profile:profiles(*)),
      recipient:recipients(*, profile:profiles(*))
    `
    )
    .eq("id", matchId)
    .single();

  // Send to farmer
  await sendNotification(
    match.farmer.profile,
    "New Match Found!",
    `You've been matched with ${match.recipient.profile.organization_name}. Match score: ${match.match_score}%. Open the app to connect!`
  );

  // Send to recipient
  await sendNotification(
    match.recipient.profile,
    "New Food Source Available!",
    `${match.farmer.profile.organization_name} has fresh produce available. Match score: ${match.match_score}%. Open the app to connect!`
  );

  // Save notification records
  await supabase.from("notifications").insert([
    {
      profile_id: match.farmer.profile.id,
      match_id: matchId,
      notification_type: "new_match",
      title: "New Match Found!",
      body: `Matched with ${match.recipient.profile.organization_name}`,
    },
    {
      profile_id: match.recipient.profile.id,
      match_id: matchId,
      notification_type: "new_match",
      title: "New Food Source Available!",
      body: `Matched with ${match.farmer.profile.organization_name}`,
    },
  ]);
}

export async function sendMatchStatusNotification(match, status, isFarmer) {
  const otherParty = isFarmer ? match.recipient : match.farmer;
  const statusMessage = {
    accepted: "has accepted your match request",
    rejected: "has declined your match request",
    cancelled: "has cancelled the match",
  }[status];

  const title = "Match Status Update";
  const body = `${otherParty.profile.organization_name} ${statusMessage}. ${
    status === "accepted" ? "You can now coordinate delivery details." : ""
  }`;

  await sendNotificationWithRetry(
    isFarmer ? match.recipient.profile : match.farmer.profile,
    title,
    body
  );

  // Save notification record
  await supabase.from("notifications").insert({
    profile_id: isFarmer ? match.recipient.profile.id : match.farmer.profile.id,
    match_id: match.id,
    notification_type: "match_status",
    title,
    body,
    status: "sent",
  });
}

export async function getNotificationHistory(userId, options = {}) {
  const {
    limit = 20,
    offset = 0,
    includeRead = true,
    notificationType,
  } = options;

  let query = supabase
    .from("notifications")
    .select(
      `
      *,
      match:matches(
        id,
        status,
        farmer:farmers(profile:profiles(organization_name)),
        recipient:recipients(profile:profiles(organization_name))
      )
    `
    )
    .eq("profile_id", userId)
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (!includeRead) {
    query = query.eq("read", false);
  }

  if (notificationType) {
    query = query.eq("notification_type", notificationType);
  }

  const { data: notifications, error } = await query;
  if (error) throw error;

  return notifications;
}

export async function markNotificationsAsRead(userId, notificationIds) {
  const { error } = await supabase
    .from("notifications")
    .update({ read: true, read_at: new Date().toISOString() })
    .eq("profile_id", userId)
    .in("id", notificationIds);

  if (error) throw error;
}

export async function updateNotificationPreferences(userId, preferences) {
  const { error } = await supabase
    .from("profiles")
    .update({ notification_preferences: preferences })
    .eq("id", userId);

  if (error) throw error;
}

// Replace the existing sendNotification function with sendNotificationWithRetry
const sendNotification = sendNotificationWithRetry;

export async function sendTestNotification(phoneNumber) {
  try {
    const response = await fetch(`${API_URL}/api/send-test-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
        message:
          "This is a test notification from the Open Doors Platform. Backend is working yay",
        type: "sms",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending test notification:", error);
    throw error;
  }
}
