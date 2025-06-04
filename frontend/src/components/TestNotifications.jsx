import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { sendTestNotification } from "../api/notifications";

const TestNotifications = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    if (!phoneNumber) {
      setStatus({ success: false, error: "Please enter a phone number" });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const result = await sendTestNotification(phoneNumber);
      setStatus(result);
    } catch (error) {
      setStatus({
        success: false,
        error: error.message || "Failed to send test message",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Test Notifications</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+1234567890"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
        />
        <p className="mt-1 text-sm text-gray-500">
          Enter your phone number with country code (e.g., +1 for US)
        </p>
      </div>

      <button
        onClick={handleTest}
        disabled={loading}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#4CAF50] hover:bg-[#45a049]"
        }`}
      >
        {loading ? "Sending..." : "Send Test Message"}
      </button>

      {status && (
        <div
          className={`mt-4 p-3 rounded-md ${
            status.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.success ? (
            <p>✅ Test message sent successfully! Check your phone.</p>
          ) : (
            <div>
              <p className="font-medium">❌ Failed to send message:</p>
              <p className="text-sm mt-1">{status.error}</p>
              {status.code && (
                <p className="text-sm mt-1">Error code: {status.code}</p>
              )}
              {status.moreInfo && (
                <p className="text-sm mt-1">More info: {status.moreInfo}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestNotifications;
