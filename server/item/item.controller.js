'use strict';

const Item = require('./item.model');

function getAll(req, res) {
  return Item.findAll().then(items => res.status(200).send({ items }));
}

module.exports = {
  getAll
};
