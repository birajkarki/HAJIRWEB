import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Your SVG Logo (replace with your actual SVG logo) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-8 w-8 text-blue-500"
      >
        {/* Your SVG Path goes here */}
      </svg>

      {/* Website Title or any other text */}
      <h1 className="text-xl font-bold text-gray-700">Your Website Title</h1>

      {/* Button for additional actions */}
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default LoginHeader;
