import axios from "axios";

const ClientAxios = axios.create({
  /* API where I will post and get information from my database */
  baseURL: "http://localhost:4000",
});

export default ClientAxios;
