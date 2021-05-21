'use strict';

const { auth: { secret } } = require('../../config');
const Audience = require('./audience');
const { BAD_REQUEST } = require('../errors/status');
const HttpError = require('../errors/httpError');
const jwt = require('jsonwebtoken');

const msg = {
  TOKEN_INVALID: 'Token is invalid',
  TOKEN_EXPIRED: 'Token is expired'
};

function verify(req, _, next) {
  const token = req.params.token || req.body.token;
  try {
    const { id, aud } = jwt.verify(token, secret);
    if (aud !== Audience.Scope.Setup) {
      throw new HttpError(BAD_REQUEST, msg.TOKEN_INVALID);
    }
    req.id = id;
    return next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      throw new HttpError(BAD_REQUEST, msg.TOKEN_INVALID);
    }
    if (err instanceof jwt.TokenExpiredError) {
      throw new HttpError(BAD_REQUEST, msg.TOKEN_EXPIRED);
    }
    throw err;
  }
}

module.exports = verify;
