import axios from 'axios';

const api = axios.create({
  baseURL: 'https://italocedro.com.br'
});

export default api;