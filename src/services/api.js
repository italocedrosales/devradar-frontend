import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.99.12.30'
});

export default api;