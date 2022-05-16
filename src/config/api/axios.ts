import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import cleanLocalStorage from '../../utils/cleanLocalStorage';
import setLocalStorage from '../../utils/setLocalStorage';
import { LOGOUT_USER, REFRESH_TOKENS } from '../routes/endpoints';
import { VIEW_LOGIN } from '../routes/paths';

const { NODE_ENV } = process.env;
const accessToken = window.localStorage.getItem('access');

const refresh = async () => {
  try {
    const { data } = await PrivateAxios.post(REFRESH_TOKENS, {});
    setLocalStorage('access', data.accessToken.token);

    return data.accessToken.token;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 400) {
        cleanLocalStorage();
        await axios.post(LOGOUT_USER);
        window.location.href = VIEW_LOGIN;
      }
    }
  }
};

// Axios instance for candidates use and user login
const ClientAxios = axios.create({
  /* API to which the app is going to connect to the database */
  baseURL:
    NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://fulltimeforce-video-interview.herokuapp.com',
  withCredentials: true,
});

// Axios instance for authenticated users
const PrivateAxios = axios.create({
  baseURL:
    NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://fulltimeforce-video-interview.herokuapp.com',
});

PrivateAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers!['Authorization']) {
      config.headers!['Authorization'] = `Bearer ${accessToken}`;
    }
    config.withCredentials = true;
    return config;
  },
  (error: any) => Promise.reject(error),
);

PrivateAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const newAccessToken = await refresh();
      prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
      return PrivateAxios(prevRequest);
    }

    return Promise.reject(error);
  },
);

export default ClientAxios;
export { PrivateAxios };
