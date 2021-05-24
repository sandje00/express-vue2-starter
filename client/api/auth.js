import client from './client';

const url = {
  register: '/users/register',
  verify: token => `/users/verify/${token}`,
  login: '/users/login'
};

function register(userData) {
  return client.post(url.register, userData);
}

function verify(token) {
  return client.get(url.verify(token));
}

function login(userData) {
  return client.post(url.login, userData);
}

export default {
  register,
  verify,
  login
};
