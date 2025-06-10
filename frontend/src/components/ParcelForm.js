import React, { useState } from "react";
import API from "../api";

function ParcelForm() {
  const [form, setForm] = useState({
    customerName: "",
    deliveryAddress: "",
    contactNumber: "",
    parcelSize: "",
    weight: "",
    trackingNumber: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
e.preventDefault();
try {
await API.post("/parcels", form); // ✅ Correct path
alert("Parcel created successfully!");
window.location.reload();
} catch (error) {
alert("Error creating parcel.");
console.error(error);
}
};

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      {Object.keys(form).map((key) => (
        <div key={key} style={{ margin: "8px 0" }}>
          <input
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>
      ))}
      <button type="submit">Create Parcel</button>
    </form>
  );
}

export default ParcelForm;