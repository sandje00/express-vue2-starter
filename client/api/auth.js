import client from './client';

const url = {
  register: '/users/register',
  verify: token => `/users/verify/${token}`,
  login: '/users/login',
  forgotPassword: '/users/forgotPassword',
  resetPassword: '/users/resetPassword'
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

function forgotPassword(email) {
  return client.post(url.forgotPassword, { email });
}

function resetPassword(body) {
  return client.post(url.resetPassword, body);
}

export default {
  register,
  verify,
  login,
  forgotPassword,
  resetPassword
};
