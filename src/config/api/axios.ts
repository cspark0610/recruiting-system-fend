import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import setLocalStorage from "../../utils/setLocalStorage";
import store from "../../redux/store/store";
import { REFRESH_TOKENS } from "../routes/endpoints";
import { LogOut } from "../../redux/users/actions/UserAction";

const { NODE_ENV } = process.env;
const accessToken = window.localStorage.getItem("access");

const { dispatch } = store;

const refresh = async () => {
  try {
    const { data } = await PrivateAxios.post(REFRESH_TOKENS);
    setLocalStorage("access", data.accessToken.token);

    return data.accessToken.token;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 400) {
        dispatch(LogOut());
      }
    }
  }
};

// Axios instance for candidates use and user login
const ClientAxios = axios.create({
  /* API to which the app is going to connect to the database */
  baseURL:
    NODE_ENV === "development"
      ? "https://fulltimeforce-video-interview.herokuapp.com"
      : "https://fulltimeforce-video-interview.herokuapp.com",
  withCredentials: true,
});

// Axios instance for authenticated users
const PrivateAxios = axios.create({
  baseURL:
    NODE_ENV === "development"
      ? "https://fulltimeforce-video-interview.herokuapp.com"
      : "https://fulltimeforce-video-interview.herokuapp.com",
});

PrivateAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers!["Authorization"]) {
      config.headers!["Authorization"] = `Bearer ${accessToken}`;
    }
    config.withCredentials = true;
    return config;
  },
  (error: any) => Promise.reject(error)
);

PrivateAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const newAccessToken = await refresh();
      prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return PrivateAxios(prevRequest);
    }

    return Promise.reject(error);
  }
);

export default ClientAxios;
export { PrivateAxios };
