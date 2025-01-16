import { EnvConfig } from '@/types/env';

export function getEnvConfig(): EnvConfig {
  const isProd = process.env.NODE_ENV === 'production';

  const envConfig = {
    BASE_URL: isProd ? String(process.env.BASE_URL_PRD) : String(process.env.BASE_URL_DEV),
    API_URL: isProd ? String(process.env.API_URL_PRD) : String(process.env.API_URL_DEV),
  };

  return envConfig;
}
