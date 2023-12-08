const LoginHeader = () => {
  return (
    <div className="flex fixed top-0 w-full  items-center justify-between  bg-blue-600 p-4 ">
      {/* Grouping Logo and Text */}
      <div className="flex items-center">
        {/* Your SVG Logo */}
        <img
          src="/logo.svg" // Replace with the correct path to your logo
          alt="Logo"
          className="h-16 w-18 mr-2" // Increased size to 24x24 and added margin-right
        />

        {/* Text: Smart Attendance System */}
        <h1 className="text-md font-bold text-white">
          Smart Attendance System
        </h1>
      </div>

      {/* "Visit Our Site" Button */}
      <a
        href="https://hajirapp.com" // Replace with your actual landing page URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-100 hover:underline"
      >
        Visit Our Site
      </a>
    </div>
  );
};

export default LoginHeader;
