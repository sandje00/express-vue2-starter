import client from './client';

const url = {
  register: '/users/register',
  verify: token => `/users/verify/${token}`
};

function register(userData) {
  return client.post(url.register, userData);
}

function verify(token) {
  return client.get(url.verify(token));
}

export default {
  register,
  verify
};
