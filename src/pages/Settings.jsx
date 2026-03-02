import DashboardLayout from "../layouts/DashboardLayout";

function Settings() {
  return (
    <DashboardLayout title="Settings">
      <div className="bg-white p-6 rounded shadow space-y-4">
        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          Change Password
        </button>

        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Delete Account
        </button>
      </div>
    </DashboardLayout>
  );
}

export default Settings;