import DashboardLayout from "../layouts/DashboardLayout";

function Notifications() {
  return (
    <DashboardLayout title="Notifications">
      <div className="bg-white p-6 rounded shadow">
        <p>⚠ AWS Certification expires in 15 days.</p>
        <p>✅ Google Data Analytics renewed successfully.</p>
      </div>
    </DashboardLayout>
  );
}

export default Notifications;