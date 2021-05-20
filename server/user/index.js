'use strict';

const auth = require('../shared/auth');
const ctrl = require('./user.controller');
const router = require('express').Router();
const verify = require('../shared/auth/verify');

router
  .post('/register', ctrl.register)
  .post('/login', ctrl.login)
  .post('/forgotPassword', ctrl.forgotPassword)
  .get('/verify/:token', verify, ctrl.verify)
  .post('/resetPassword', verify, ctrl.resetPassword)
  .use(auth.authenticate('jwt'))
  .get('/', ctrl.getAll);

module.exports = { path: '/users', router };
