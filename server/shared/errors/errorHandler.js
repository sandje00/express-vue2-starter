'use strict';

const { INTERNAL_SERVER_ERROR } = require('./status');

function errorHandler(err, req, res, next) {
  return err.status
    ? res.status(err.status).json({ error: err.message })
    : res.status(INTERNAL_SERVER_ERROR)
      .json({ error: 'Something went wrong' });
}

module.exports = errorHandler;
