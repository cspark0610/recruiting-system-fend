import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import store from "../../redux/store/store";
import { setStorage } from "../../utils/localStorage";
import { REFRESH_TOKENS } from "../routes/endpoints";
import { LogOut } from "../../redux/users/actions/UserAction";
import { RefreshTokenResponse } from "../../redux/users/types/axiosResponses";
import { getStorageItem } from "../../utils/localStorage";

const { NODE_ENV } = process.env;

const { dispatch } = store;

const accessToken = getStorageItem("access", true);

const refresh = async () => {
	try {
		const { data } = await PrivateAxios.post<RefreshTokenResponse>(REFRESH_TOKENS);
		setStorage({ access: data.accessToken });

		return data.accessToken;
	} catch (error: any) {
		if (error.response) {
			if (error.response.status === 401 || error.response.status === 400) {
				dispatch(LogOut());
				setStorage({
					refresh_error: "Your session has expired. Please login again.",
				});
			}
		}
	}
};

// Axios instance for candidates use and user login
const ClientAxios = axios.create({
	/* API to which the app is going to connect to the database */
	baseURL:
		NODE_ENV === "development"
			? "http://localhost:3001"
			: "https://fulltimeforce-video-interview.herokuapp.com",
	withCredentials: true,
	headers: {
		"Access-Control-Allow-Origin": "https://workat-five.vercel.app",
		"Access-Control-Allow-Headers": "*",
		"Access-Control-origins": "*",
		origin: "https://workat-five.vercel.app",
	},
});

// Axios instance for authenticated usersz
const PrivateAxios = axios.create({
	baseURL:
		NODE_ENV === "development"
			? "http://localhost:3001"
			: "https://fulltimeforce-video-interview.herokuapp.com",
	headers: {
		"Access-Control-Allow-Origin": "https://workat-five.vercel.app",
		"Access-Control-Allow-Headers": "*",
		"Access-Control-origins": "*",
		origin: "https://workat-five.vercel.app",
	},
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
