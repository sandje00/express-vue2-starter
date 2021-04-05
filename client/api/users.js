import client from './client';

const url = { helloWorld: '/users' };

function helloWorld() {
  return client.get(url.helloWorld);
}

export default {
  helloWorld
};
