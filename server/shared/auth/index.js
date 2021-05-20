'use strict';

const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt');
const Audience = require('./audience');
const { auth: { secret } } = require('../../config');
const passport = require('passport');
const { User } = require('../database');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: secret,
  audience: Audience.Scope.Access
};

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
  return User.findByPk(payload.id)
    .then(user => done(null, user || false))
    .catch(err => done(err, false));
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = {
  initialize(options) {
    return passport.initialize(options);
  },
  authenticate(strategy, options = {}) {
    return passport.authenticate(strategy, { ...options, failWithError: true });
  }
};
