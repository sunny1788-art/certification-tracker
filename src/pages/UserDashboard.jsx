import Navbar from "../components/Navbar";
import CertificationCard from "../components/CertificationCard";

function UserDashboard() {
  const myCertifications = [
    {
      name: "Microsoft Azure Fundamentals",
      expiry: "2025-11-10",
      status: "Active",
    },
    {
      name: "Oracle Java Certification",
      expiry: "2024-09-01",
      status: "Expired",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar title="User Portal" />
      <div className="p-8 grid md:grid-cols-2 gap-6">
        {myCertifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;