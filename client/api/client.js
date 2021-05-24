import axios from 'axios';

const baseURL = '/api/v1';
const config = { baseURL };
const client = axios.create(config);
client.interceptors.response.use(res => res, err => Promise.reject(err.response));

export default client;
