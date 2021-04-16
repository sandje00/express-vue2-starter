'use strict';

const {
  EMAIL_SENDER_NAME,
  EMAIL_SENDER_ADDRESS,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD
} = process.env;

module.exports = {
  sender: {
    name: EMAIL_SENDER_NAME,
    address: EMAIL_SENDER_ADDRESS
  },
  email: {
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD
    }
  }
};
