import client from './client';

const url = {
  register: '/users/register'
};

function register(userData) {
  client.post(url.register, userData);
}

export default {
  register
};
