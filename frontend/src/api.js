import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:8080/parcels", // your backend base URL
});

