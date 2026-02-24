import { differenceInDays } from "date-fns";

function CertificationCard({ cert, admin }) {

  const today = new Date();
  const expiryDate = new Date(cert.expiry);
  const daysLeft = Math.ceil(
    (expiryDate - today) / (1000 * 60 * 60 * 24)
  );

  let statusColor = "text-green-600";

  if (daysLeft <= 0) {
    statusColor = "text-red-600";
  } else if (daysLeft <= 30) {
    statusColor = "text-yellow-600";
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-2">{cert.name}</h3>

      {admin && <p>User: {cert.user}</p>}

      <p>Expiry: {cert.expiry}</p>

      <p className={`font-semibold mt-2 ${statusColor}`}>
        {daysLeft > 0
          ? `${daysLeft} days remaining`
          : "Expired"}
      </p>

      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
        {admin ? "Manage Renewal" : "View Certificate"}
      </button>
    </div>
  );
}

export default CertificationCard;