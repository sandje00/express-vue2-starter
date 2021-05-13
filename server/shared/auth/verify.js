'use strict';

const { auth: { secret } } = require('../../config');
const Audience = require('./audience');
const jwt = require('jsonwebtoken');

function verify(req, res, next) {
  const { token } = req.body;

  try {
    const { id, aud } = jwt.verify(token, secret);
    if (aud !== Audience.Scope.Setup) {
      return res.status(400).send({
        message: 'Token is invalid'
      });
    }
    next({ id, aud });
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(400).send({
        message: 'Token is invalid'
      });
    }
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(400).send({
        message: 'Token is expired'
      });
    }
    throw err;
  }
}

module.exports = verify;
