const passport = require('passport');

const User = require('../components/user/user.model');
const getJwtStrategy = require('./JWTStrategy');

module.exports = (config) => {
  passport.use(getJwtStrategy(passport, config, { User }));
};

