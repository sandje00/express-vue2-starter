'use strict';

const { auth: { secret } } = require('../config');
const Audience = require('../shared/auth/audience');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

async function verify(req, res) {
  const { token } = req.params;

  try {
    const { id, aud } = jwt.verify(token, secret);
    if (aud !== Audience.Scope.Setup) {
      return res.status(400).send({
        message: 'Token is invalid'
      });
    }

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
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(400).send({
        message: 'Token is expired'
      });
    }
    throw err;
  }

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
  const status = await bcrypt.compare(password, user.password);
  if (!status) {
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

module.exports = {
  register,
  verify,
  login
};
