// /src/components/Common/Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-700 p-4 text-white h-screen">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
          <li>
            <Link to="/attendance">Attendance</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
          <li>
            <Link to="/plans">Subscription Plans</Link>
          </li>
          <li>
            <Link to="/approver">Approver</Link>
          </li>
          <li>
            <Link to="/missing-attendance">Missing Attendance</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
