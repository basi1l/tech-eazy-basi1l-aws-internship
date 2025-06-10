import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
    const [parcels, setParcels] = useState([]);
    const [form, setForm] = useState({
      trackingNumber: '',
      customerName: '',
      deliveryAddress: '',
      contactNumber: '',
      parcelSize: '',
      weight: '',
    });
  
    useEffect(() => {
      fetchParcels();
    }, []);
  
    const fetchParcels = async () => {
      try {
        const res = await api.get('');
        setParcels(res.data);
      } catch (error) {
        console.error('Error fetching parcels:', error);
      }
    };
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await api.post('', form);
      setForm({ trackingNumber: '', customerName: '', deliveryAddress: '', contactNumber: '', parcelSize: '', weight: '' });
      fetchParcels();
    };
  
    const handleDelete = async (id) => {
      await api.delete(`/${id}`);
      fetchParcels();
    };
  
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Parcel Tracker</h2>
  
        <form onSubmit={handleSubmit}>
          {Object.keys(form).map((key) => (
            <div key={key}>
              <input
                name={key}
                placeholder={key}
                value={form[key]}
                onChange={handleChange}
                required
                style={{ margin: '5px', padding: '8px', width: '250px' }}
              />
            </div>
          ))}
          <button type="submit">Add Parcel</button>
        </form>
  
        <h3>Parcels List</h3>
        <table border="1" cellPadding="8" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Tracking No</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Size</th>
              <th>Weight</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((p) => (
              <tr key={p.trackingNumber}>
                <td>{p.trackingNumber}</td>
                <td>{p.customerName}</td>
                <td>{p.deliveryAddress}</td>
                <td>{p.parcelSize}</td>
                <td>{p.weight}</td>
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
export default App;
