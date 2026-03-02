import Sidebar from "../components/Sidebar";

function Certificates() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">My Certificates</h2>
        <p>Certificates will appear here...</p>
      </div>
    </div>
  );
}

export default Certificates;