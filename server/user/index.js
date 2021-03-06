'use strict';

const { authenticate } = require('../shared/auth');
const authorize = require('../shared/auth/authorize');
const ctrl = require('./user.controller');
const router = require('express').Router();
const verifyJwt = require('../shared/auth/verify');

router
  .post('/register', ctrl.register)
  .post('/login', ctrl.login)
  .post('/forgotPassword', ctrl.forgotPassword)
  .get('/verify/:token', verifyJwt, ctrl.verify)
  .post('/resetPassword', verifyJwt, ctrl.resetPassword)
  .use(authenticate('jwt'))
  .use(authorize())
  .get('/', ctrl.getAll);

module.exports = { path: '/users', router };
