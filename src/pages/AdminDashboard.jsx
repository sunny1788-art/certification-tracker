import { useState } from "react";
import Navbar from "../components/Navbar";
import CertificationCard from "../components/CertificationCard";
import AnalyticsChart from "../components/AnalyticsChart";
import StatsCard from "../components/StatsCard";

function AdminDashboard() {

  const certifications = [
  { name: "AWS Cloud Practitioner", user: "John", expiry: "2026-05-20" },
  { name: "Google Data Analytics", user: "Jane", expiry: "2025-01-10" },
  { name: "Microsoft Azure Fundamentals", user: "Alex", expiry: "2025-07-12" },
  { name: "Oracle Java Certification", user: "Rahul", expiry: "2024-12-01" },
  { name: "Cisco CCNA", user: "Priya", expiry: "2025-09-15" },
  { name: "CompTIA Security+", user: "Ankit", expiry: "2026-02-22" },
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

      {/* ✅ Stats Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Certificates" value="25" />
        <StatsCard title="Active" value="18" />
        <StatsCard title="Expired" value="7" />
      </div>

      {/* Analytics Chart */}
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