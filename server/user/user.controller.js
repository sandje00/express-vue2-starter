'use strict';

const { UniqueConstraintError } = require('sequelize');
const User = require('./user.model');

async function register({ body }, res) {
  try {
    const user = await User.create(body);
    user.verifyEmail();
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      return res.status(400).send({
        error: err.errors[0].message
      });
    }
    throw err;
  }

  return res.status(201).send({
    message: 'You have been registered successfully. Check your email to verify your account.'
  });
}

module.exports = {
  register
};
