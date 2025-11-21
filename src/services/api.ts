// api/apiClient.ts

// CHANGED: Created axios instance file
import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com'; // CHANGED: Replace with your URL

const apiClient = axios.create({
  baseURL: API_BASE_URL, // CHANGED
  timeout: 10000, // CHANGED: 10 sec timeout
  headers: {
    'Content-Type': 'application/json', // CHANGED
  },
});

// ============ REQUEST INTERCEPTOR ============
apiClient.interceptors.request.use(
  async config => {
    const token = ''; // CHANGED: Replace with secure token storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // CHANGED
    }
    return config;
  },
  error => Promise.reject(error),
);

// ============ RESPONSE INTERCEPTOR ============
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.log('API ERROR:', error.response?.data || error.message); // CHANGED
    return Promise.reject(error);
  },
);

export default apiClient; // CHANGED
