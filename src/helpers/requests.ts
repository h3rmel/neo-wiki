import { AxiosHeaders, AxiosResponse } from 'axios';

import { apiClient } from '@/lib/api';

type RequestConfig = {
  params?: Record<string, unknown>;
  headers?: AxiosHeaders;
};

async function getRequest<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
  const response: AxiosResponse<T> = await apiClient.get(endpoint, {
    params: config.params,
    headers: config.headers,
  });

  return response.data;
}

export { getRequest };
