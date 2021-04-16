'use strict';

const ctrl = require('./item.controller');
const router = require('express').Router();

router
  .get('/', ctrl.getAll);

module.exports = { path: '/items', router };
