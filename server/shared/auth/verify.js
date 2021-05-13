'use strict';

const { auth: { secret } } = require('../../config');
const Audience = require('./audience');
const jwt = require('jsonwebtoken');

const TOKEN_INVALID = 'Token is invalid';
const TOKEN_EXPIRED = 'Token is expired';

function verify(req, res, next) {
  const { token } = req.body;

  try {
    const { id, aud } = jwt.verify(token, secret);
    if (aud !== Audience.Scope.Setup) {
      return res.status(400).send({ message: TOKEN_INVALID });
    }
    req.id = id;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(400).send({ message: TOKEN_INVALID });
    }
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(400).send({ message: TOKEN_EXPIRED });
    }
    throw err;
  }
}

module.exports = verify;
