// /src/components/Auth/OTPVerification.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    // TODO: Implement OTP verification logic
    // For now, navigate to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-600"
            >
              Enter OTP:
            </label>
            <input
              type="text"
              id="otp"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleVerify}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
