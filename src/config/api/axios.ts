import axios from 'axios';

const { NODE_ENV } = process.env;

const ClientAxios = axios.create({
  /* API to which the app is going to connect to the database */
  baseURL:
    NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://fulltimeforce-video-interview.herokuapp.com',
});

export default ClientAxios;
