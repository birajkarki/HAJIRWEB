import { Link } from "react-router-dom";
import {
  BsHouse,
  BsBuilding,
  BsPeople,
  BsCalendar,
  BsFileText,
  BsGear,
  BsEnvelope,
  BsCreditCard,
  BsPersonCheck,
  BsClock,
  BsPerson,
  // BsFillPersonFill,
} from "react-icons/bs";
import logo from "/logo.svg";

const Sidebar = () => {
  // Sample user information
  const user = {
    name: "Biraj Karki",
    email: "birajkarki9849@gmail.com",
    image: "/biraj.png",
  };

  return (
    <aside className="bg-gray-700 text-white h-screen">
      {/* Sidebar Header */}
      <div className="bg-blue-500 p-4 text-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-28 w-28 mb-2 mx-auto" />

        {/* User Information */}
        <div className="flex items-center justify-center mt-2 border-b border-white pb-2">
          <div className="mr-2">
            <img
              src={user.image}
              alt="User"
              className="h-16 w-16 rounded-full border-2 border-white"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="p-4">
        <ul>
          <li className="mb-2">
            <Link to="/dashboard" className="flex items-center">
              <BsHouse className="mr-2" />
              <span className="text-lg">Dashboard</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/company" className="flex items-center">
              <BsBuilding className="mr-2" />
              <span className="text-lg">Company</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/employee" className="flex items-center">
              <BsPeople className="mr-2" />
              <span className="text-lg">Employee</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/attendance" className="flex items-center">
              <BsCalendar className="mr-2" />
              <span className="text-lg">Attendance</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/missing-attendance" className="flex items-center">
              <BsClock className="mr-2" />
              <span className="text-lg">Missing Attendance</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/reports" className="flex items-center">
              <BsFileText className="mr-2" />
              <span className="text-lg">Reports</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/settings" className="flex items-center">
              <BsGear className="mr-2" />
              <span className="text-lg">Settings</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/inbox" className="flex items-center">
              <BsEnvelope className="mr-2" />
              <span className="text-lg">Inbox</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/plans" className="flex items-center">
              <BsCreditCard className="mr-2" />
              <span className="text-lg">Subscription Plans</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/approver" className="flex items-center">
              <BsPersonCheck className="mr-2" />
              <span className="text-lg">Approver</span>
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/profile" className="flex items-center">
              <BsPerson className="mr-2" />
              <span className="text-lg">Profile</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 mt-auto text-center cursor-pointer">
        <p className="text-sm">LOgout </p>
        <div className="mt-2"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
