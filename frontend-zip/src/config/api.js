import axios from 'axios';

const DEPLOYED = 'https://pear-poised-hen.cyclic.app/';  // URL of your deployed backend API
const LOCALHOST = 'http://localhost:5454';  // URL of your local backend API

export const API_BASE_URL = LOCALHOST;  // Change to DEPLOYED when in production

const api = axios.create({
  baseURL: API_BASE_URL,  // Set the base URL for all Axios requests
});

const token = localStorage.getItem('jwt');  // Retrieve the JWT token from localStorage

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;  // Set the Authorization header for all requests
}

api.defaults.headers.post['Content-Type'] = 'application/json';  // Set Content-Type header for POST requests

export default api;  // Export the configured Axios instance