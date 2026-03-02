import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("userProfile");
    if (data) setUsers([JSON.parse(data)]);
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Registered Users</h2>

        {users.map((user, index) => (
          <div key={index} className="bg-white p-6 rounded shadow mb-4">
            <p><strong>Name:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>College:</strong> {user.collegeName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;