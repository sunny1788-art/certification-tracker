import { useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

function CertificateDetails() {
  const { id } = useParams();

  return (
    <DashboardLayout title="Certificate Details">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">
          Certificate ID: {id}
        </h2>

        <p><strong>Certificate Name:</strong> Example Certification</p>
        <p><strong>Issued By:</strong> Certification Authority</p>
        <p><strong>Issue Date:</strong> 2024-01-01</p>
        <p><strong>Expiry Date:</strong> 2026-01-01</p>
        <p><strong>Status:</strong> Active</p>

        <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded">
          Download Certificate
        </button>
      </div>
    </DashboardLayout>
  );
}

export default CertificateDetails;