'use strict';

const Item = require('./item.model');
const { StatusCodes: OK } = require('http-status-codes');

function getAll(req, res) {
  return Item.findAll().then(items => res.status(OK).send({ items }));
}

module.exports = {
  getAll
};
