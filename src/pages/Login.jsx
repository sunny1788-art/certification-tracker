import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    login(email);

    if (email === "admin@gmail.com") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white p-2 rounded"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center">
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/signup")}
    className="text-blue-600 cursor-pointer font-semibold"
  >
    Sign Up
  </span>
</p>
      </div>
    </div>
  );
}

export default Login;