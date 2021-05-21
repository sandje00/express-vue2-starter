'use strict';

const ctrl = require('./comments.controller');
const router = require('express').Router();

router
  .get('/:itemId', ctrl.getAll);

module.exports = { path: '/comments', router };
