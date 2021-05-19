'use strict';

const Audience = require('../shared/auth/audience');
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

async function verify({ id }, res) {
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).send({
      message: 'We are unable to find user for this token'
    });
  }
  if (user.active) {
    return res.status(409).send({
      message: 'This account has already been verified'
    });
  }
  user.active = true;
  await user.save();

  return res.status(200).send({
    message: 'Your email account has been verified'
  });
}

async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(401).send({
      error: 'Username and password are not matching'
    });
  }
  const result = await user.passwordCompare(password);
  if (!result) {
    return res.status(401).send({
      error: 'Username and password are not matching'
    });
  }
  const token = user.createToken({
    audience: Audience.Scope.Access,
    expiresIn: '5 days'
  });
  return res.json({ token });
}

async function forgotPassword({ body }, res) {
  const { email } = body;
  try {
    const user = await User.findOne({ where: { email } });
    user.sendResetToken();
  } catch (err) {
    return res.status(404).send({
      message: 'User not found'
    });
  }
  return res.status(200).json({
    message: 'Password reset email has been sent. Check your email to proceed.'
  });
}

async function resetPassword({ body: { password }, id }, res) {
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).send({
      message: 'We are unable to find user for this token'
    });
  }
  user.password = password;
  await user.save();
  return res.status(200).json({
    message: 'Your password has been reset successfully.'
  });
}

module.exports = {
  register,
  verify,
  login,
  forgotPassword,
  resetPassword
};
