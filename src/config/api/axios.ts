import axios from "axios";

const { NODE_ENV } = process.env;

const ClientAxios = axios.create({
  /* API where I will post and get information from my database */
  /* baseURL:
    NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://fulltimeforce-video-interview.herokuapp.com', */
  baseURL: "http://localhost:4000",
});

export default ClientAxios;
