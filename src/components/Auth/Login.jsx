import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [error, setError] = useState(false);

  const images = ["/slide-1.png", "/slide-2.png", "/slide-3.png"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Loop through images
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change the interval as needed (in milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleLogin = () => {
    // TODO: Implement authentication logic
    // For now, navigate to OTP verification if the number is correct
    if (phoneNumber === "981234") {
      navigate("/otp-verification");
    } else {
      // Set error state to true if the entered number is incorrect
      setError(true);
    }
  };

  return (
    <>
      <LoginHeader />

      <div className="flex justify-center items-center h-screen">
        {/* Combined Left Image and Right Login Form */}
        <div className="border p-8 shadow-md rounded-md flex">
          {/* Left Image Loop */}
          <div className="mr-8">
            <img
              src={images[currentImage]}
              alt={`Image ${currentImage + 1}`}
              className="h-60 w-60 rounded-md shadow-md"
            />
          </div>

          {/* Right Login Form */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-500">
                Login to Your Account
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number:{" "}
                  <span className="text-xs">(Use 981234 for development)</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring ${
                    error ? "border-red-500" : "border-gray-300"
                  }`}
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setError(false); // Reset error state when user starts typing
                  }}
                />
                {error && (
                  <p className="text-red-500 text-xs mt-1">
                    Incorrect number. Please use 981234 for development.
                  </p>
                )}
              </div>
              <div className="flex justify-center w-full">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Get OTP
                </button>
              </div>
            </div>

            {/* Additional Text Below Get OTP Button */}
            <p className="mt-4 text-sm text-gray-600">
              We will send you a one-time password on this mobile number:
              <br />
              <strong>{phoneNumber}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
