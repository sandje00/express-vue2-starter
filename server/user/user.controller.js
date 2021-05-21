'use strict';

const {
  BAD_REQUEST,
  CONFLICT,
  CREATED,
  NOT_FOUND,
  OK,
  UNAUTHORIZED
} = require('../shared/errors/status');
const Audience = require('../shared/auth/audience');
const HttpError = require('../shared/httpError');
const { UniqueConstraintError } = require('sequelize');
const User = require('./user.model');

const msg = {
  SUCCESS_REGISTER: 'You have been registered successfully. Check your email to verify your account.',
  SUCCESS_VERIFY: 'Your email account has been verified.',
  SUCCESS_FORGOT: 'Password reset email has been sent. Check your email to proceed.',
  SUCCESS_RESET: 'Your password has been reset successfully.',
  USER_NOT_FOUND: 'User not found.',
  ALREADY_VERIFIED: 'This account has already been verified',
  WRONG_CREDENTIALS: 'Username and password are not matching'
};

async function register({ body }, res) {
  try {
    const user = await User.create(body);
    user.verifyEmail();
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      throw new HttpError(BAD_REQUEST, err.errors[0].message);
    }
    throw err;
  }
  return res.status(CREATED).json({
    message: msg.SUCCESS_REGISTER
  });
}

async function verify({ id }, res) {
  const user = await User.findByPk(id);
  if (!user) throw new HttpError(NOT_FOUND, msg.USER_NOT_FOUND);
  if (user.active) throw new HttpError(CONFLICT, msg.ALREADY_VERIFIED);
  user.active = true;
  await user.save();
  return res.status(OK).json({
    message: msg.SUCCESS_VERIFY
  });
}

async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) throw new HttpError(UNAUTHORIZED, msg.WRONG_CREDENTIALS);
  const result = await user.passwordCompare(password);
  if (!result) throw new HttpError(UNAUTHORIZED, msg.WRONG_CREDENTIALS);
  const token = user.createToken({
    audience: Audience.Scope.Access,
    expiresIn: '5 days'
  });
  return res.status(OK).json({ token });
}

async function forgotPassword({ body }, res) {
  const { email } = body;
  try {
    const user = await User.findOne({ where: { email } });
    user.sendResetToken();
  } catch (err) {
    throw new HttpError(NOT_FOUND, msg.USER_NOT_FOUND);
  }
  return res.status(OK).json({
    message: msg.SUCCESS_FORGOT
  });
}

async function resetPassword({ body: { password }, id }, res) {
  const user = await User.findByPk(id);
  if (!user) throw new HttpError(NOT_FOUND, msg.USER_NOT_FOUND);
  user.password = password;
  await user.save();
  return res.status(OK).json({
    message: msg.SUCCESS_RESET
  });
}

async function getAll(req, res) {
  const users = await User.findAll();
  res.status(200).json(users);
}

module.exports = {
  register,
  verify,
  login,
  forgotPassword,
  resetPassword,
  getAll
};
