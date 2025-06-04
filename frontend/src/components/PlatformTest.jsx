import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { sendTestNotification } from "../api/notifications";
import {
  findMatches,
  createMatch,
  updateMatchStatus,
  getActiveMatches,
  createRecipientRecord,
} from "../api/matching";

const PlatformTest = () => {
  const [testResults, setTestResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [farmerId, setFarmerId] = useState("");
  const [farmers, setFarmers] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [selectedRecipientId, setSelectedRecipientId] = useState("");
  const [activeMatches, setActiveMatches] = useState([]);
  const [profilesWithoutRecipients, setProfilesWithoutRecipients] = useState(
    []
  );
  const [deleteStatus, setDeleteStatus] = useState(null);

  // Fetch available farmers and recipients on component mount
  useEffect(() => {
    async function fetchData() {
      console.log("Starting data fetch...");

      // First, let's check the raw profiles table with more detailed logging
      const { data: allProfiles, error: allProfilesError } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });

      console.log("=== DEBUG: All Profiles ===");
      console.log("Total profiles found:", allProfiles?.length || 0);
      if (allProfiles) {
        allProfiles.forEach((profile) => {
          console.log(`Profile: ${profile.organization_name}`, {
            id: profile.id,
            user_type: profile.user_type,
            created_at: profile.created_at,
          });
        });
      }
      console.log("Profiles error:", allProfilesError);

      // Check the recipients table directly with more detailed logging
      const { data: allRecipients, error: allRecipientsError } = await supabase
        .from("recipients")
        .select("*");

      console.log("=== DEBUG: All Recipients ===");
      console.log("Total recipients found:", allRecipients?.length || 0);
      if (allRecipients) {
        allRecipients.forEach((recipient) => {
          console.log(`Recipient record:`, {
            id: recipient.id,
            profile_id: recipient.profile_id,
            status: recipient.status,
          });
        });
      }
      console.log("Recipients error:", allRecipientsError);

      // Fetch all profiles with user_type recipient or organization
      const { data: recipientProfiles, error: recipientProfilesError } =
        await supabase
          .from("profiles")
          .select(
            `
          id,
          user_type,
          organization_name,
          contact_name,
          email,
          phone
        `
          )
          .eq("user_type", "recipient")
          .order("created_at", { ascending: false });

      console.log("=== DEBUG: Recipient Profiles Only ===");
      console.log("Query result:", {
        recipientProfiles,
        recipientProfilesError,
      });

      if (recipientProfilesError) {
        console.error(
          "Error fetching recipient profiles:",
          recipientProfilesError
        );
        // Do not return here, continue to process even if profile fetch failed
      }

      if (recipientProfiles) {
        console.log(
          "Total recipient profiles found:",
          recipientProfiles.length
        );

        const profilesNeedingRecipients = [];
        const validRecipients = [];

        for (const profile of recipientProfiles) {
          // Now fetch the recipient record for each profile
          const { data: recipientRecord, error: recipientRecordError } =
            await supabase
              .from("recipients")
              .select(
                `
                id,
                profile_id
              `
              )
              .eq("profile_id", profile.id)
              .single();

          if (
            recipientRecordError &&
            recipientRecordError.code !== "PGRST116"
          ) {
            // PGRST116 means no row found
            console.error(
              `Error fetching recipient record for profile ${profile.id}:`,
              recipientRecordError
            );
            continue; // Skip this profile if there's a real error
          }

          if (recipientRecord) {
            console.log(
              `Profile ${profile.id} (${profile.organization_name}) HAS recipient record:`,
              recipientRecord
            );
            validRecipients.push({ ...profile, recipients: [recipientRecord] });
          } else {
            console.log(
              `Profile ${profile.id} (${profile.organization_name}) NEEDS recipient record`
            );
            profilesNeedingRecipients.push(profile);
          }
        }

        console.log("Profiles needing recipients:", profilesNeedingRecipients);
        setProfilesWithoutRecipients(profilesNeedingRecipients);

        console.log("Valid recipients after check:", validRecipients);
        setRecipients(validRecipients);

        if (validRecipients.length > 0) {
          console.log(
            "Setting selected recipient ID to:",
            validRecipients[0].recipients[0].id
          );
          setSelectedRecipientId(validRecipients[0].recipients[0].id);
        } else {
          console.log("No valid recipients found after check");
        }
      } else {
        console.log("No recipient profile data found initially");
      }

      // Fetch farmers with their relationships
      const { data: farmerData, error: farmerError } = await supabase
        .from("profiles")
        .select(
          `
          id,
          user_type,
          organization_name,
          farmers (
            id,
            profile_id
          )
        `
        )
        .eq("user_type", "farmer")
        .order("created_at", { ascending: false });

      console.log("=== DEBUG: Farmer Query ===");
      console.log("Query result:", { farmerData, farmerError });

      if (!farmerError && farmerData) {
        const validFarmers = farmerData.filter(
          (profile) => profile.farmers && profile.farmers.length > 0
        );
        console.log("Valid farmers after filter:", validFarmers);
        setFarmers(validFarmers);
        if (validFarmers.length > 0) {
          setFarmerId(validFarmers[0].farmers[0].id);
        }
      }
    }
    fetchData();
  }, []);

  const runTest = async (testName, testFn) => {
    setLoading(true);
    try {
      const result = await testFn();
      console.log(`Test ${testName} result:`, result);
      setTestResults((prev) => ({
        ...prev,
        [testName]: { success: true, result },
      }));
    } catch (error) {
      console.error(`Test ${testName} failed:`, error);
      setTestResults((prev) => ({
        ...prev,
        [testName]: { success: false, error: error.message },
      }));
    } finally {
      setLoading(false);
    }
  };

  const testBackendConnection = async () => {
    const backendUrl =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
    const response = await fetch(`${backendUrl}/api/send-test-notification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phoneNumber: "+16474508523",
        message: "Testing backend connection",
        type: "sms",
      }),
    });
    return response.json();
  };

  const testSupabaseConnection = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return {
      count: data.length,
      profiles: data.map((profile) => ({
        id: profile.id,
        user_type: profile.user_type,
        organization_name: profile.organization_name,
        contact_name: profile.contact_name,
        email: profile.email,
        phone: profile.phone,
        city: profile.city,
        state: profile.state,
        created_at: profile.created_at,
      })),
    };
  };

  const testMatchingSystem = async () => {
    if (!farmerId) {
      throw new Error("Please select a farmer first");
    }
    const matches = await findMatches(farmerId);
    return matches;
  };

  const testCreateMatch = async () => {
    if (!farmerId || !selectedRecipientId) {
      throw new Error("Please select both a farmer and a recipient");
    }

    // First find potential matches
    const potentialMatches = await findMatches(farmerId);
    const match = potentialMatches.find(
      (m) => m.recipient_id === selectedRecipientId
    );

    if (!match) {
      throw new Error(
        "No potential match found between selected farmer and recipient"
      );
    }

    const createdMatch = await createMatch(
      farmerId,
      selectedRecipientId,
      match.match_score,
      match.match_reasons
    );
    return createdMatch;
  };

  const testUpdateMatchStatus = async (matchId, status) => {
    if (!matchId) {
      throw new Error("Please select a match to update");
    }
    const updatedMatch = await updateMatchStatus(matchId, status, farmerId);
    return updatedMatch;
  };

  const testGetActiveMatches = async () => {
    if (!farmerId) {
      throw new Error("Please select a farmer first");
    }
    console.log("Calling getActiveMatches with farmerId:", farmerId);
    const matches = await getActiveMatches(farmerId);
    console.log("Received matches from getActiveMatches:", matches);
    setActiveMatches(matches);
    return matches;
  };

  const handleCreateRecipient = async (profileId) => {
    try {
      setLoading(true);
      const recipient = await createRecipientRecord(profileId);
      console.log("Created recipient record:", recipient);

      // Refresh the data
      const { data: recipientData } = await supabase
        .from("profiles")
        .select(
          `
          id,
          user_type,
          organization_name,
          contact_name,
          recipients!left (
            id,
            status,
            profile_id
          )
        `
        )
        .eq("user_type", "recipient")
        .order("created_at", { ascending: false });

      if (recipientData) {
        const validRecipients = recipientData.filter(
          (profile) => profile.recipients && profile.recipients.length > 0
        );
        setRecipients(validRecipients);
        if (validRecipients.length > 0) {
          setSelectedRecipientId(validRecipients[0].recipients[0].id);
        }

        // Update profiles without recipients
        const profilesNeedingRecipients = recipientData.filter(
          (profile) => !profile.recipients || profile.recipients.length === 0
        );
        setProfilesWithoutRecipients(profilesNeedingRecipients);
      }
    } catch (error) {
      console.error("Error creating recipient record:", error);
      setTestResults((prev) => ({
        ...prev,
        createRecipient: { success: false, error: error.message },
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAllMatches = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete ALL matches? This action cannot be undone."
      )
    ) {
      return;
    }

    setLoading(true);
    setDeleteStatus(null);

    try {
      // First get all match IDs
      const { data: matches, error: fetchError } = await supabase
        .from("matches")
        .select("id");

      if (fetchError) throw fetchError;

      if (matches && matches.length > 0) {
        // Delete each match by ID
        const { error: deleteError } = await supabase
          .from("matches")
          .delete()
          .in(
            "id",
            matches.map((m) => m.id)
          );

        if (deleteError) throw deleteError;
      }

      setDeleteStatus({
        success: true,
        message: `Successfully deleted ${matches?.length || 0} matches`,
      });
      // Refresh active matches display
      setActiveMatches([]);
    } catch (error) {
      console.error("Error deleting matches:", error);
      setDeleteStatus({
        success: false,
        error: error.message || "Failed to delete matches",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Platform Test Suite</h1>

      {/* Notification Test */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Notification System Test</h2>
        <div className="flex gap-4 items-end mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+16474508523"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            onClick={() =>
              runTest("notifications", () => sendTestNotification(phoneNumber))
            }
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            Test Notifications
          </button>
        </div>
      </div>

      {/* Backend Connection Test */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Backend Connection Test</h2>
        <button
          onClick={() => runTest("backend", testBackendConnection)}
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
        >
          Test Backend Connection
        </button>
      </div>

      {/* Database Connection Test */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Database Connection Test</h2>
        <button
          onClick={() => runTest("database", testSupabaseConnection)}
          disabled={loading}
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 disabled:bg-gray-400"
        >
          Test Database Connection
        </button>
      </div>

      {/* Matching System Tests */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Matching System Tests</h2>

        {/* Debug Info */}
        <div className="mb-4 p-2 bg-gray-100 rounded">
          <p className="text-sm text-gray-600">
            Found {farmers.length} farmers and {recipients.length} recipients
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Profiles needing recipient records:{" "}
            {profilesWithoutRecipients.length}
          </p>
          {profilesWithoutRecipients.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-yellow-600">
                Found {profilesWithoutRecipients.length} profiles without
                recipient records:
              </p>
              <div className="mt-2 space-y-2">
                {profilesWithoutRecipients.map((profile) => (
                  <div
                    key={profile.id}
                    className="flex items-center justify-between p-2 bg-white rounded"
                  >
                    <div>
                      <p className="font-medium">
                        {profile.organization_name || "Unnamed Organization"}
                      </p>
                      <p className="text-xs text-gray-500">
                        Profile ID: {profile.id}
                      </p>
                      <p className="text-xs text-gray-500">
                        User Type: {profile.user_type}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCreateRecipient(profile.id)}
                      disabled={loading}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 disabled:bg-gray-400"
                    >
                      Create Recipient Record
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Farmer Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Farmer ({farmers.length} available)
          </label>
          <select
            value={farmerId}
            onChange={(e) => setFarmerId(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-4"
          >
            {farmers.map((profile) => (
              <option key={profile.farmers[0].id} value={profile.farmers[0].id}>
                {profile.organization_name || "Unnamed Farmer"}
              </option>
            ))}
          </select>
        </div>

        {/* Recipient Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Recipient ({recipients.length} available)
          </label>
          <select
            value={selectedRecipientId}
            onChange={(e) => setSelectedRecipientId(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-4"
          >
            {recipients.length === 0 ? (
              <option value="">No recipients available</option>
            ) : (
              recipients.map((profile) => (
                <option
                  key={profile.recipients[0].id}
                  value={profile.recipients[0].id}
                >
                  {profile.organization_name || "Unnamed Organization"}
                  {profile.recipients[0].status
                    ? ` (${profile.recipients[0].status})`
                    : ""}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Matching Test Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => runTest("findMatches", testMatchingSystem)}
            disabled={loading || !farmerId}
            className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 disabled:bg-gray-400"
          >
            Find Potential Matches
          </button>

          <button
            onClick={() => runTest("createMatch", testCreateMatch)}
            disabled={loading || !farmerId || !selectedRecipientId}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
          >
            Create Match
          </button>

          <button
            onClick={() => runTest("getActiveMatches", testGetActiveMatches)}
            disabled={loading || !farmerId}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            Get Active Matches
          </button>
        </div>

        {/* Active Matches Display */}
        {activeMatches && activeMatches.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium mb-2">Active Matches:</h3>
            <div className="space-y-2">
              {activeMatches.map((match) => (
                <div key={match.id} className="p-3 bg-gray-50 rounded-md">
                  <p>Match ID: {match.id}</p>
                  <p>Status: {match.status}</p>
                  <p>Score: {match.match_score}%</p>
                  <div className="mt-2 space-x-2">
                    <button
                      onClick={() =>
                        runTest(`updateMatch_${match.id}_accept`, () =>
                          testUpdateMatchStatus(match.id, "accepted")
                        )
                      }
                      disabled={loading}
                      className="px-3 py-1 bg-green-500 text-white rounded-md text-sm"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() =>
                        runTest(`updateMatch_${match.id}_reject`, () =>
                          testUpdateMatchStatus(match.id, "rejected")
                        )
                      }
                      disabled={loading}
                      className="px-3 py-1 bg-red-500 text-white rounded-md text-sm"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add this before the Test Results section */}
      <div className="mb-6 p-4 border border-red-200 rounded-lg bg-red-50">
        <h3 className="text-lg font-semibold text-red-700 mb-2">Danger Zone</h3>
        <button
          onClick={handleDeleteAllMatches}
          disabled={loading}
          className={`px-4 py-2 rounded-md text-white font-medium ${
            loading
              ? "bg-red-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {loading ? "Deleting..." : "Delete All Matches"}
        </button>
        {deleteStatus && (
          <div
            className={`mt-2 text-sm ${
              deleteStatus.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {deleteStatus.success ? deleteStatus.message : deleteStatus.error}
          </div>
        )}
        <p className="mt-2 text-sm text-red-600">
          Warning: This will permanently delete all matches in the database.
        </p>
      </div>

      {/* Test Results */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Test Results</h2>
        <div className="space-y-4">
          {Object.entries(testResults).map(([testName, result]) => (
            <div
              key={testName}
              className={`p-4 rounded-lg ${
                result.success
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <h3 className="font-medium capitalize">
                {testName.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              {result.success ? (
                <pre className="mt-2 text-sm overflow-x-auto">
                  {JSON.stringify(result.result, null, 2)}
                </pre>
              ) : (
                <p className="mt-2 text-sm text-red-600">{result.error}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformTest;
