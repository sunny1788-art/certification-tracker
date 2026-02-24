import { useState } from "react";
import Navbar from "../components/Navbar";

function AddCertification() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    expiry: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Certification Added Successfully!");
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar title="Add Certification" />

      <div className="max-w-xl mx-auto bg-white p-8 mt-10 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-6">Add New Certification</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Certification Name"
            className="w-full border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="organization"
            placeholder="Issuing Organization"
            className="w-full border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="expiry"
            className="w-full border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="file"
            name="file"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
          >
            Save Certification
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddCertification;