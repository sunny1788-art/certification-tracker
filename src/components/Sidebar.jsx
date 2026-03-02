import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6 space-y-4">
      <h2 className="text-xl font-bold mb-6">Certification Portal</h2>

      {/* User Links */}
      {user?.role === "user" && (
        <>
          <Link to="/dashboard" className="block hover:text-indigo-400">
            Dashboard
          </Link>
          <Link to="/my-certificates" className="block hover:text-indigo-400">
            My Certificates
          </Link>
          <Link to="/notifications" className="block hover:text-indigo-400">
            Notifications
          </Link>
          <Link to="/profile" className="block hover:text-indigo-400">
            Profile
          </Link>
        </>
      )}

      {/* Admin Links */}
      {user?.role === "admin" && (
        <>
          <Link to="/admin" className="block hover:text-indigo-400">
            Admin Dashboard
          </Link>
          <Link to="/users" className="block hover:text-indigo-400">
            Users
          </Link>
          <Link to="/certificates" className="block hover:text-indigo-400">
            All Certificates
          </Link>
        </>
      )}

      <Link to="/settings" className="block hover:text-indigo-400">
        Settings
      </Link>
    </div>
  );
}

export default Sidebar;