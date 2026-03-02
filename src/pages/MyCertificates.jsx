import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

function MyCertificates() {
  const navigate = useNavigate();

  const certificates = [
    { id: 1, name: "AWS Cloud Practitioner" },
    { id: 2, name: "Google Data Analytics" },
    { id: 3, name: "Microsoft Azure Fundamentals" },
  ];

  return (
    <DashboardLayout title="My Certificates">
      {certificates.map((cert) => (
        <div
          key={cert.id}
          onClick={() => navigate(`/certificate/${cert.id}`)}
          className="bg-white p-6 rounded shadow mb-4 cursor-pointer hover:bg-gray-50"
        >
          {cert.name}
        </div>
      ))}
    </DashboardLayout>
  );
}

export default MyCertificates;