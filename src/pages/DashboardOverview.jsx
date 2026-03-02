import DashboardLayout from "../layouts/DashboardLayout";

function DashboardOverview() {
  return (
    <DashboardLayout title="Dashboard Overview">
      <h2 className="text-2xl font-bold mb-6">
        Welcome to Certification Portal
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Total Certificates</h3>
          <p className="text-2xl font-bold">12</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Expiring Soon</h3>
          <p className="text-2xl font-bold text-yellow-600">3</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Expired</h3>
          <p className="text-2xl font-bold text-red-600">2</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardOverview;