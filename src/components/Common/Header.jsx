// /src/components/Common/Header.js
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement actual logout logic (e.g., clearing authentication state)
    // For now, simulate a logout and redirect to the login page
    // You should replace this with your actual logout logic
    console.log("Logging out...");

    // Simulate a logout by clearing any authentication state
    // Assuming you have some global state management for authentication
    // Example: authContext.logout();

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Hajir Attendance System</h1>
        <div className="flex items-center space-x-4">
          {/* Add user information (name, profile picture) */}
          <span>Welcome, Biraj Karki</span>
          <img
            src="path/to/profile-picture.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          {/* Add a logout button */}
          <button onClick={handleLogout} className="text-white">
            Logout
          </button>
          {/* Add other elements as needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
