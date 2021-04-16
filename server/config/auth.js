'use strict';

const {
  AUTH_SALT_ROUNDS,
  AUTH_JWT_SECRET
} = process.env;

module.exports = {
  saltRounds: parseInt(AUTH_SALT_ROUNDS),
  secret: AUTH_JWT_SECRET
};
