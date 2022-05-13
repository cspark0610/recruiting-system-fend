import { AxiosResponse } from 'axios';
import ClientAxios from '../config/api/axios';
/*import { REFRESH_TOKENS } from '../config/routes/endpoints';*/

export async function refreshTokens() {
  const refresh_token = window.localStorage.getItem('refresh');

  /*await ClientAxios.post(REFRESH_TOKENS, { refresh_token });*/
}

export default async function handleRequest(
  request: () => Promise<AxiosResponse>,
) {
  try {
    return await request();
  } catch (error) {
    if (error.response.status === 401) {
      await refreshTokens();
      return await request();
    }
    throw error;
  }
}
