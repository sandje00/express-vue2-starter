'use strict';

class HttpError extends Error {
  constructor(status = 500, ...params) {
    super(...params);
    this.name = 'HttpError';
    this.status = status;
    Error.captureStackTrace(this, HttpError);
  }
}

module.exports = HttpError;
