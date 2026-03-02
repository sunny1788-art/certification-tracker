import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("userProfile");
    if (data) setProfile(JSON.parse(data));
  }, []);

  if (!profile) return <div>No profile found</div>;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        <div className="bg-white p-8 rounded-xl shadow-lg">

          <div className="flex items-center gap-6 mb-6">
            {profile.profilePhoto && (
              <img
                src={URL.createObjectURL(profile.profilePhoto)}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            )}
            <h2 className="text-2xl font-bold">{profile.fullName}</h2>
          </div>

          <div className="space-y-3">
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Mobile:</strong> {profile.mobile}</p>
            <p><strong>College:</strong> {profile.collegeName}</p>
            <p><strong>Study Level:</strong> {profile.presentStudy}</p>
            <p><strong>Address:</strong> {profile.address}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;