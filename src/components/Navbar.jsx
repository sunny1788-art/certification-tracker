function Navbar({ title }) {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <button className="bg-red-500 px-4 py-1 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
}

export default Navbar;