import React, { useEffect, useState } from "react";
import API from "../api";

function ParcelList() {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    API.get("/")
      .then((res) => setParcels(res.data))
      .catch((err) => console.error("Error fetching parcels:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete('/${id}');
      setParcels(parcels.filter((p) => p.trackingNumber !== id));
    } catch (error) {
      alert("Failed to delete parcel.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>All Parcels</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Address</th>
            <th>Tracking</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((p) => (
            <tr key={p.trackingNumber}>
              <td>{p.customerName}</td>
              <td>{p.deliveryAddress}</td>
              <td>{p.trackingNumber}</td>
              <td>
                <button onClick={() => handleDelete(p.trackingNumber)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParcelList;