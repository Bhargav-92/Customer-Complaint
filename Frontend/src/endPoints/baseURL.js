import axios from 'axios';

const LOCAL = process.env.REACT_APP_URL_LOCAL;
const NETWORK = process.env.REACT_APP_URL_NETWORK;
const BASE_URL = NETWORK


export const axios_instance = axios.create({
    baseURL: BASE_URL+"/api"
  });

