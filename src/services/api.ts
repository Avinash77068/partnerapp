// api/apiClient.ts

// CHANGED: Created axios instance file
import axios from 'axios';
import Config from 'react-native-config';
import logger from '../utils/logger';

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
    logger.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    logger.log('Request Headers: ' + JSON.stringify(config.headers));
    if (config.data) {
      logger.log('Request Data: ' + JSON.stringify(config.data));
    }
    return config;
  },
  error => {
    logger.error(`API Request Error: ${error.message}`);
    return Promise.reject(error);
  },
);

// ============ RESPONSE INTERCEPTOR ============
apiClient.interceptors.response.use(
  response => {
    logger.log(`API Response: ${response.config.method?.toUpperCase()} ${response.config.url} - Status: ${response.status}`);
    logger.log('Response Data: ' + JSON.stringify(response.data));
    return response;
  },
  error => {
    console.error('API ERROR:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    logger.error(`API Response Error: ${error.message} URL: ${error.config?.url} Status: ${error.response?.status}`);
    return Promise.reject(error);
  },
);

export default apiClient; // CHANGED
