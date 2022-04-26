import axios from 'axios';

const { NODE_ENV } = process.env;
console.log(NODE_ENV);

const ClientAxios = axios.create({
  /* API where I will post and get information from my database */
  baseURL:
    NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://fulltimeforce-video-interview.herokuapp.com',
});

export default ClientAxios;
