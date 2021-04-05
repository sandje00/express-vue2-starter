import axios from 'axios';

const baseURL = '/api/v1';
const config = { baseURL };
const client = axios.create(config);

export default client;
