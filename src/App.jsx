import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import AddCertification from "./pages/AddCertification";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import UsersList from "./pages/UsersList";
import Certificates from "./pages/Certificates";
import DashboardOverview from "./pages/DashboardOverview";
import MyCertificates from "./pages/MyCertificates";
import CertificateDetails from "./pages/CertificateDetails";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<UsersList />} />
<Route path="/certificates" element={<Certificates />} />
<Route path="/dashboard" element={<DashboardOverview />} />
<Route path="/my-certificates" element={<MyCertificates />} />
<Route path="/certificate/:id" element={<CertificateDetails />} />
<Route path="/notifications" element={<Notifications />} />
<Route path="/settings" element={<Settings />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add"
          element={
            <ProtectedRoute role="user">
              <AddCertification />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;