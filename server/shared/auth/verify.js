'use strict';

const { auth: { secret } } = require('../../config');
const Audience = require('./audience');
const { StatusCodes: BAD_REQUEST } = require('http-status-codes');
const HttpError = require('../httpError');
const jwt = require('jsonwebtoken');

const msg = {
  TOKEN_INVALID: 'Token is invalid',
  TOKEN_EXPIRED: 'Token is expired'
};

function verify(req, res, next) {
  const token = req.params.token || req.body.token;
  try {
    const { id, aud } = jwt.verify(token, secret);
    if (aud !== Audience.Scope.Setup) {
      throw new HttpError(BAD_REQUEST, msg.TOKEN_INVALID);
    }
    req.id = id;
    next();
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
