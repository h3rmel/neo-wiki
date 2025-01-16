import axios from 'axios';

import { getEnvConfig } from '@/config/env';

const envConfig = getEnvConfig();

const apiClient = axios.create({
  baseURL: envConfig.API_URL,
  timeout: 5000,
});

export { apiClient };
