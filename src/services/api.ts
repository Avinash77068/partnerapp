// api/apiClient.ts

import axios from 'axios';
import logger from '../utils/logger';

const API_BASE_URL ='https://test10-admin.revv.co.in/vendor/vendor-service/api'; 

const apiClient = axios.create({
  baseURL: API_BASE_URL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json', 
  },
});

// ============ REQUEST INTERCEPTOR ============
apiClient.interceptors.request.use(
  async config => {
    const token = 'Config.AUTH_TOKEN_KEY'; 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
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

export default apiClient;
