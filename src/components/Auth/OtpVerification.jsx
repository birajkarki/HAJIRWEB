import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(true); // Start the timer automatically
  const navigate = useNavigate();

  const handleVerify = () => {
    // TODO: Implement OTP verification logic
    // For now, navigate to the dashboard if the entered OTP is correct
    if (otp === "0000") {
      navigate("/dashboard");
    } else {
      // Display a warning if the entered OTP is incorrect
      alert("Incorrect OTP. Please use 0000 for development.");
    }
  };

  const handleResendOTP = () => {
    setIsTimerRunning(true);
    setTimer(180); // Reset the timer to 3 minutes
  };

  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  useEffect(() => {
    if (timer === 0) {
      setIsTimerRunning(false);
    }
  }, [timer]);

  return (
    <>
      <LoginHeader />

      <div className="flex justify-center items-center h-screen">
        {/* Left Image */}
        <div className="mr-8">
          <img
            src="/otp.png" // Replace with the correct path to your OTP image
            alt="OTP Image"
            className="h-60 w-60 rounded-md shadow-md"
          />
        </div>

        {/* Right OTP Verification Form */}
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
              {/* Use four input boxes for OTP entry */}
              <div className="flex">
                {[...Array(4)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    id={`otp${index + 1}`}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-12 mr-2 text-center"
                    value={otp[index] || ""}
                    onChange={(e) => {
                      const newOTP = otp.split("");
                      newOTP[index] = e.target.value;
                      setOTP(newOTP.join(""));
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              {/* Resend OTP Button */}
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-red-500 hover:underline focus:outline-none"
                disabled={isTimerRunning}
              >
                Resend OTP in {timer} sec
              </button>
              {/* Verify Button */}
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
    </>
  );
};

export default OTPVerification;
