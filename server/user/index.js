'use strict';

const ctrl = require('./user.controller');
const router = require('express').Router();

router
  .post('/register', ctrl.register)
  .get('/verify/:token', ctrl.verify)
  .post('/login', ctrl.login);

module.exports = { path: '/users', router };
