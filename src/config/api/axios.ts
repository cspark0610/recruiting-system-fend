import axios from 'axios';

const { NODE_ENV } = process.env;

const ClientAxios = axios.create({
  /* API to which the app is going to connect to the database */
  baseURL:
    NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://fulltimeforce-video-interview.herokuapp.com',
});

export const PrivateAxios = axios.create({
  baseURL:
    NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://fulltimeforce-video-interview.herokuapp.com',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('access')}`,
  },
  withCredentials: true,
});

export default ClientAxios;
