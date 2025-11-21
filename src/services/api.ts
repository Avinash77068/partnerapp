// api/apiClient.ts

// CHANGED: Created axios instance file
import axios from 'axios';
import Config from 'react-native-config';
const API_BASE_URL = Config.API_BASE_URL; // Base URL for all API requests

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
    const token = Config.AUTH_TOKEN_KEY; // CHANGED: Replace with secure token storage
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
    console.error('API ERROR:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    return Promise.reject(error);
  },
);

export default apiClient; // CHANGED
