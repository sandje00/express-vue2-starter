'use strict';

const Comment = require('./comment.model');
const { OK } = require('../shared/errors/status');

function getAll({ params: { itemId } }, res) {
  return Comment.findAll({ where: itemId }).then(items => res.status(OK).send({ items }));
}

module.exports = {
  getAll
};
