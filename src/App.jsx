// /src/App.js
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Common/Header";
import Sidebar from "./components/Common/Sidebar";
import Login from "./components/Auth/Login";
import OtpVerification from "./components/Auth/OtpVerification";
import Dashboard from "./components/Dashboard/Dashboard";
import Company from "./components/Dashboard/Company";
import Employee from "./components/Dashboard/Employee";
import Attendance from "./components/Dashboard/Attendance";
import Reports from "./components/Dashboard/Reports";
import Settings from "./components/Dashboard/Settings";
import Inbox from "./components/Inbox/Message";
import SubscriptionPlans from "./components/Plans/SubscriptionPlans";
import Approver from "./components/Dashboard/Approver";
import MissingAttendance from "./components/MissingAttendance/MissingAttendance";
import UserProfile from "./components/Profile/UserProfile";

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  // Conditionally render Sidebar and Header based on the route
  const isDashboardRoute = window.location.pathname.includes("/dashboard");
  return (
    <div className="flex">
      {isDashboardRoute && <Sidebar />}
      <div className="flex-1 flex flex-col">
        {isDashboardRoute && <Header />}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect to /login by default */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Use MainLayout for the components that should have Sidebar and Header */}
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route
          path="/dashboard/*"
          element={
            <MainLayout>{/* Dashboard components go here */}</MainLayout>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company" element={<Company />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/plans" element={<SubscriptionPlans />} />
        <Route path="/approver" element={<Approver />} />
        <Route path="/missing-attendance" element={<MissingAttendance />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
