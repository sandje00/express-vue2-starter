'use strict';

const { AUTH_SALT_ROUNDS } = process.env;

module.exports = {
  ...readConfig()
};

function readConfig() {
  if (AUTH_SALT_ROUNDS) return { saltRounds: parseInt(AUTH_SALT_ROUNDS) };
  if (!AUTH_SALT_ROUNDS) {
    throw new Error('Missing auth salt rounds in the config');
  }
}
