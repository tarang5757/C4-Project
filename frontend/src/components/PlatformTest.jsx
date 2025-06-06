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
      // First, let's check the raw profiles table with more detailed logging
      const { data: allProfiles, error: allProfilesError } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });

      // Check the recipients table directly with more detailed logging
      const { data: allRecipients, error: allRecipientsError } = await supabase
        .from("recipients")
        .select("*");

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

      if (recipientProfilesError) {
        // Do not return here, continue to process even if profile fetch failed
      }

      if (recipientProfiles) {
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
            continue; // Skip this profile if there's a real error
          }

          if (recipientRecord) {
            validRecipients.push({ ...profile, recipients: [recipientRecord] });
          } else {
            profilesNeedingRecipients.push(profile);
          }
        }

        setProfilesWithoutRecipients(profilesNeedingRecipients);

        setRecipients(validRecipients);

        if (validRecipients.length > 0) {
          setSelectedRecipientId(validRecipients[0].recipients[0].id);
        }
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

      if (!farmerError && farmerData) {
        const validFarmers = farmerData.filter(
          (profile) => profile.farmers && profile.farmers.length > 0
        );
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
    setTestResults({});
    try {
      const result = await testFn();
      setTestResults((prev) => ({
        ...prev,
        [testName]: { success: true, result },
      }));
    } catch (error) {
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

  // Function to find potential matches for a single selected farmer
  const testMatchingSystem = async () => {
    if (!farmerId) {
      throw new Error("Please select a farmer first");
    }
    const matches = await findMatches(farmerId);
    return matches;
  };

  // Function to find potential matches for all active farmers
  const testFindAllPotentialMatches = async () => {
    // Fetch all active farmers
    const { data: farmers, error: farmersError } = await supabase
      .from("farmers")
      .select("id")
      .eq("active", true);

    if (farmersError) throw farmersError;
    if (!farmers || farmers.length === 0) {
      console.log("No active farmers found for potential match test.");
      return []; // Return empty array if no active farmers
    }

    let allPotentialMatches = [];

    // For each active farmer, find potential matches
    for (const farmer of farmers) {
      try {
        // Use findMatches function which already handles finding matches against all recipients
        const potentialMatches = await findMatches(farmer.id);
        allPotentialMatches = [...allPotentialMatches, ...potentialMatches];
      } catch (error) {
        // Decide how to handle errors for individual farmers - log and continue or stop?
        // For now, we'll log the error and continue with the next farmer.
      }
    }

    // Sort combined matches by score descending
    allPotentialMatches.sort((a, b) => b.match_score - a.match_score);

    return allPotentialMatches;
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

  const testMatchAlgorithm = async () => {
    try {
      setLoading(true);
      const results = {
        totalFarmers: 0,
        totalRecipients: 0,
        matchesFound: 0,
        matchesCreated: 0,
        errors: [],
      };

      // Get all farmers
      const { data: farmers, error: farmersError } = await supabase
        .from("farmers")
        .select("id, active, profile:profiles!inner(*)")
        .eq("active", true);

      if (farmersError) throw farmersError;
      results.totalFarmers = farmers.length;

      // Get all active recipients
      const { data: recipients, error: recipientsError } = await supabase
        .from("recipients")
        .select("id, active, profile:profiles!inner(*)")
        .eq("active", true);

      if (recipientsError) throw recipientsError;
      results.totalRecipients = recipients.length;

      // For each farmer, find matches with all recipients
      for (const farmer of farmers) {
        try {
          const potentialMatches = await findMatches(farmer.id);
          results.matchesFound += potentialMatches.length;

          // Create matches for scores > 50
          for (const match of potentialMatches) {
            if (match.match_score >= 50) {
              await createMatch(
                farmer.id,
                match.recipient_id,
                match.match_score,
                match.match_reasons
              );
              results.matchesCreated++;
            }
          }
        } catch (error) {
          results.errors.push(
            `Error processing farmer ${farmer.id}: ${error.message}`
          );
        }
      }

      return results;
    } catch (error) {
      throw new Error(`Match algorithm test failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRecipient = async (profileId) => {
    try {
      setLoading(true);
      const recipient = await createRecipientRecord(profileId);

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
    )
      return;

    setLoading(true);
    setDeleteStatus(null);

    try {
      const { error: deleteError } = await supabase
        .from("matches")
        .delete()
        .not("id", "is", null);

      if (deleteError) throw deleteError;

      const { data: remaining, error: verifyError } = await supabase
        .from("matches")
        .select("id");

      if (verifyError) throw verifyError;

      if (remaining.length > 0) {
        throw new Error(
          `Failed to delete all matches. ${remaining.length} matches still exist.`
        );
      }

      setDeleteStatus({
        success: true,
        message: `Successfully deleted all matches.`,
      });
      setActiveMatches([]);
    } catch (error) {
      setDeleteStatus({
        success: false,
        error: error.message || "Failed to delete matches.",
      });
      console.error("Delete error:", error);
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

        {/* Test Match Algorithm Button */}
        <div className="mb-4">
          <button
            onClick={() => runTest("matchAlgorithm", testMatchAlgorithm)}
            disabled={loading}
            className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 disabled:bg-gray-400"
          >
            Run System-Wide Matching
          </button>
          <p className="text-sm text-gray-600 mt-1">
            Automatically finds and creates matches between all active farmers
            and recipients. Creates matches for scores ≥ 50. Use this to test
            the entire matching system at once.
          </p>
        </div>

        {/* Farmer Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Farmer to Test ({farmers.length} available)
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
            Select Recipient to Test ({recipients.length} available)
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

        {/* Individual Matching Test Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => runTest("findMatchesSelected", testMatchingSystem)}
            disabled={loading || !farmerId}
            className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 disabled:bg-gray-400"
          >
            Find Potential Matches for Selected Farmer
          </button>
          <p className="text-sm text-gray-600 mt-1">
            Shows all potential matches for the selected farmer, sorted by match
            score. This only displays matches, it doesn't create them.
          </p>

          {/* New button for finding potential matches for all farmers */}
          <button
            onClick={() =>
              runTest("findAllMatches", testFindAllPotentialMatches)
            }
            disabled={loading}
            className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-gray-400"
          >
            Find Potential Matches (All Farmers)
          </button>
          <p className="text-sm text-gray-600 mt-1">
            Shows all potential matches found across all active farmers, sorted
            by match score. This only displays matches, it doesn't create them.
          </p>

          <button
            onClick={() => runTest("createMatch", testCreateMatch)}
            disabled={loading || !farmerId || !selectedRecipientId}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
          >
            Create Single Match
          </button>
          <p className="text-sm text-gray-600 mt-1">
            Creates a match between the selected farmer and recipient if their
            match score is ≥ 50. Use this to test specific farmer-recipient
            pairs.
          </p>

          <button
            onClick={() => runTest("getActiveMatches", testGetActiveMatches)}
            disabled={loading || !farmerId}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            View Active Matches
          </button>
          <p className="text-sm text-gray-600 mt-1">
            Shows all active (pending or accepted) matches for the selected
            farmer. You can accept or reject matches from this view.
          </p>
        </div>

        {/* Danger Zone */}
        <div className="mb-6 p-4 border border-red-200 rounded-lg bg-red-50">
          <h3 className="text-lg font-semibold text-red-700 mb-2">
            Danger Zone
          </h3>
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
            Use this to reset the matching system for testing.
          </p>
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
                testName === "findMatchesSelected" ||
                testName === "findAllMatches" ? (
                  <div className="mt-4 space-y-6">
                    {result.result.map((match, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                      >
                        {/* Match Score Header */}
                        <div className="flex items-center justify-between mb-4 pb-2 border-b">
                          <h4 className="text-lg font-semibold text-gray-800">
                            Match #{index + 1} - {match.match_score}% Match
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              match.match_score >= 50
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {match.match_score >= 50
                              ? "Good Match"
                              : "Low Match"}
                          </span>
                        </div>

                        {/* Match Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Farmer Information */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-700 mb-2">
                              Farmer Details
                            </h5>
                            <div className="space-y-2">
                              <p>
                                <span className="font-medium">
                                  Organization:
                                </span>{" "}
                                {match.farmer.organization_name}
                              </p>
                              <p>
                                <span className="font-medium">Contact:</span>{" "}
                                {match.farmer.contact_name}
                              </p>
                              <p>
                                <span className="font-medium">Phone:</span>{" "}
                                {match.farmer.phone}
                              </p>
                              <p>
                                <span className="font-medium">Email:</span>{" "}
                                {match.farmer.email}
                              </p>
                              {/* Farmer Address */}
                              {(match.farmer.address ||
                                match.farmer.city ||
                                match.farmer.state ||
                                match.farmer.zip_code) && (
                                <div className="mt-2">
                                  <p className="font-medium">Location:</p>
                                  <p className="text-sm text-gray-700">
                                    {[
                                      match.farmer.address,
                                      match.farmer.city,
                                      match.farmer.state,
                                      match.farmer.zip_code,
                                    ]
                                      .filter(Boolean)
                                      .join(", ")}
                                  </p>
                                </div>
                              )}
                              <div className="mt-2">
                                <p className="font-medium">Available Crops:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {match.match_reasons.farmer_crops.map(
                                    (crop, i) => (
                                      <span
                                        key={i}
                                        className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                                      >
                                        {crop}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Recipient Information */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-700 mb-2">
                              Recipient Details
                            </h5>
                            <div className="space-y-2">
                              <p>
                                <span className="font-medium">
                                  Organization:
                                </span>{" "}
                                {match.recipient.organization_name}
                              </p>
                              <p>
                                <span className="font-medium">Contact:</span>{" "}
                                {match.recipient.contact_name}
                              </p>
                              <p>
                                <span className="font-medium">Phone:</span>{" "}
                                {match.recipient.phone}
                              </p>
                              <p>
                                <span className="font-medium">Email:</span>{" "}
                                {match.recipient.email}
                              </p>
                              {/* Recipient Address */}
                              {(match.recipient.address ||
                                match.recipient.city ||
                                match.recipient.state ||
                                match.recipient.zip_code) && (
                                <div className="mt-2">
                                  <p className="font-medium">Location:</p>
                                  <p className="text-sm text-gray-700">
                                    {[
                                      match.recipient.address,
                                      match.recipient.city,
                                      match.recipient.state,
                                      match.recipient.zip_code,
                                    ]
                                      .filter(Boolean)
                                      .join(", ")}
                                  </p>
                                </div>
                              )}
                              <div className="mt-2">
                                <p className="font-medium">Needed Foods:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {match.match_reasons.needed_foods.map(
                                    (food, i) => (
                                      <span
                                        key={i}
                                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                      >
                                        {food}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Match Reasons */}
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-semibold text-gray-700 mb-2">
                            Why This Match Works
                          </h5>
                          <ul className="space-y-2">
                            {match.match_reasons.reasons.map((reason, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>{reason}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-600">
                                Distance
                              </p>
                              <p className="text-lg font-semibold">
                                {match.match_reasons.distance} miles
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-600">
                                Urgency Level
                              </p>
                              <p
                                className={`text-lg font-semibold ${
                                  match.match_reasons.urgency_level === "High"
                                    ? "text-red-600"
                                    : "text-gray-800"
                                }`}
                              >
                                {match.match_reasons.urgency_level}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Logistics Information */}
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-semibold text-gray-700 mb-2">
                            Logistics Details
                          </h5>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-600">
                                Farmer Delivery
                              </p>
                              <p
                                className={`font-semibold ${
                                  match.match_reasons.farmer_delivery
                                    ? "text-green-600"
                                    : "text-gray-600"
                                }`}
                              >
                                {match.match_reasons.farmer_delivery
                                  ? "Available"
                                  : "Not Available"}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-600">
                                Recipient Pickup
                              </p>
                              <p
                                className={`font-semibold ${
                                  match.match_reasons.recipient_pickup
                                    ? "text-green-600"
                                    : "text-gray-600"
                                }`}
                              >
                                {match.match_reasons.recipient_pickup
                                  ? "Available"
                                  : "Not Available"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <pre className="mt-2 text-sm overflow-x-auto">
                    {JSON.stringify(result.result, null, 2)}
                  </pre>
                )
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
