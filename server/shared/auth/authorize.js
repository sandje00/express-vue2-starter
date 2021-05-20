'use strict';

const {
  StatusCodes: {
    UNAUTHORIZED,
    FORBIDDEN
  }
} = require('http-status-codes');
const HttpError = require('../httpError');
const Role = require('../../../common/role');

function authorize(role = Role.ADMIN, ...roles) {
  return ({ user }, _, next) => {
    if (!user) throw new HttpError(UNAUTHORIZED, 'Unauthorized');
    const hasRole = arguments.find(role => user.role === role);
    if (!hasRole) throw new HttpError(FORBIDDEN, 'Forbidden');
    return next();
  };
}

module.exports = authorize;
