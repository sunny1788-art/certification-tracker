import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar({ title }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{title}</h1>

      <div className="flex gap-3">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          Dark Mode
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;