import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          Certification Tracker
        </h2>

        <button
          onClick={() => navigate("/admin")}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg mb-4 hover:bg-indigo-700 transition"
        >
          Login as Admin
        </button>

        <button
          onClick={() => navigate("/user")}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Login as User
        </button>
      </div>
    </div>
  );
}

export default Login;