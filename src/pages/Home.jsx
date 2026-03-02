import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Professional Certification Tracker
      </h1>

      <div className="space-x-4">
        <Link to="/login" className="bg-white text-black px-6 py-3 rounded">
          Login
        </Link>
        <Link to="/signup" className="bg-green-500 px-6 py-3 rounded">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;