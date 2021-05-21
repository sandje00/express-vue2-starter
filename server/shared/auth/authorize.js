'use strict';

const { FORBIDDEN, UNAUTHORIZED } = require('../errors/status');
const HttpError = require('../errors/httpError');
const Role = require('../../../common/role');
const values = require('lodash/values');

function authorize(role = Role.ADMIN, ...roles) {
  return ({ user }, _, next) => {
    if (!user) throw new HttpError(UNAUTHORIZED, 'Unauthorized');
    const hasRole = values(arguments).find(role => user.role === role);
    if (!hasRole) throw new HttpError(FORBIDDEN, 'Forbidden');
    return next();
  };
}

module.exports = authorize;
