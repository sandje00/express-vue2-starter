'use strict';

const Item = require('./item.model');
const { OK } = require('../shared/errors/status');

function getAll(req, res) {
  return Item.findAll().then(items => res.status(OK).send({ items }));
}

module.exports = {
  getAll
};
