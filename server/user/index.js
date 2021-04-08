'use strict';

const ctrl = require('./user.controller');
const router = require('express').Router();

router
  .post('/register', ctrl.register);

module.exports = {
  path: '/users',
  router
};
