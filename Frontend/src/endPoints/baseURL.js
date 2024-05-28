import axios from 'axios';

const LOCAL = import.meta.env.VITE_APP_URL_LOCAL;
// const NETWORK = process.env.REACT_APP_URL_NETWORK;
const BASE_URL = LOCAL

const axios_instance = axios.create({
    baseURL: BASE_URL+"/api",
    headers:  {'Authorization': "Bearer "+ localStorage.getItem('token')}
  });

  export default axios_instance;