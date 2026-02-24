import { useState } from "react";
import Navbar from "../components/Navbar";
import CertificationCard from "../components/CertificationCard";
import AnalyticsChart from "../components/AnalyticsChart";

function AdminDashboard() {

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      user: "John Doe",
      expiry: "2026-05-20",
    },
    {
      name: "Google Data Analytics",
      user: "Jane Smith",
      expiry: "2025-01-10",
    },
  ];

  // ✅ 1. Search state
  const [search, setSearch] = useState("");

  // ✅ 2. Filter logic
  const filteredCerts = certifications.filter((cert) =>
    cert.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="bg-gray-100 min-h-screen">
    <Navbar title="Admin Portal" />

    <div className="p-8">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Certification..."
        className="p-2 border rounded mb-6 w-full md:w-1/3"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ✅ Add Chart Here */}
      <div className="mb-8 flex justify-center">
        <AnalyticsChart />
      </div>

      {/* Certification Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredCerts.map((cert, index) => (
          <CertificationCard key={index} cert={cert} admin />
        ))}
      </div>

    </div>
  </div>
);
}

export default AdminDashboard;