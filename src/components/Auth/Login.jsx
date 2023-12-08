import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Implement authentication logic
    // For now, navigate to OTP verification
    navigate("/otp-verification");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <LoginHeader />
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Get OTP
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Dont have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
