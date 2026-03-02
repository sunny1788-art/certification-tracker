import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",
    collegeName: "",
    profilePhoto: null,
    presentStudy: "",
    address: "",
    password: "",
  });

 const handleChange = (e) => {
  const { name, value, files } = e.target;

  setFormData({
    ...formData,
    [name]: files ? files[0] : value,
  });
};

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(formData));
    localStorage.setItem("isLoggedIn", "true");
    alert("Registration Successful!");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">

        <h2 className="text-2xl font-bold text-center mb-6">
          Multi-Step Registration
        </h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-3 rounded-full mb-6">
          <div
            className="bg-indigo-600 h-3 rounded-full transition-all"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit}>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-indigo-600">Personal Info</h3>

              <input name="fullName" placeholder="Full Name"
                className="border p-3 w-full rounded"
                onChange={handleChange} required />

              <input type="date" name="dob"
                className="border p-3 w-full rounded"
                onChange={handleChange} required />

              <input name="mobile" placeholder="Mobile Number"
                className="border p-3 w-full rounded"
                onChange={handleChange} required />

                <input
  type="file"
  name="profilePhoto"
  className="border p-3 w-full rounded"
  onChange={handleChange}

/>
{/* 🔥 Image Preview */}
{formData.profilePhoto && (
  <img
    src={URL.createObjectURL(formData.profilePhoto)}
    alt="Preview"
    className="w-24 h-24 mt-4 rounded-full object-cover"
  />
)}

              <button type="button"
                onClick={nextStep}
                className="bg-indigo-600 text-white px-6 py-2 rounded">
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-indigo-600">Academic Info</h3>

              <input name="collegeName"
                placeholder="University / College"
                className="border p-3 w-full rounded"
                onChange={handleChange} required />

              <select name="presentStudy"
                className="border p-3 w-full rounded"
                onChange={handleChange}>
                <option value="">Select Study Level</option>
                <option>UG</option>
                <option>PG</option>
                <option>Intermediate</option>
              </select>

              <div className="flex justify-between">
                <button type="button"
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-6 py-2 rounded">
                  Back
                </button>

                <button type="button"
                  onClick={nextStep}
                  className="bg-indigo-600 text-white px-6 py-2 rounded">
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-indigo-600">Account Info</h3>

              <input type="email" name="email"
                placeholder="Email"
                className="border p-3 w-full rounded"
                onChange={handleChange} required />

              <input type="password" name="password"
                placeholder="Password"
                className="border p-3 w-full rounded"
                onChange={handleChange} required />

              <textarea name="address"
                placeholder="Address"
                className="border p-3 w-full rounded"
                onChange={handleChange} />

              <div className="flex justify-between">
                <button type="button"
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-6 py-2 rounded">
                  Back
                </button>

                <button type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded">
                  Register
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}

export default Signup;