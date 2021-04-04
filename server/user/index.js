'use strict';

const ctrl = require('./user.controller');
const router = require('express').Router();

router.get('/', ctrl.helloWorld);

module.exports = {
  path: '/users',
  router
};
