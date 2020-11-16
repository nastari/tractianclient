import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:30233',
});

export default api;
