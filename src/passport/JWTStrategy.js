const { Strategy, ExtractJwt } = require('passport-jwt');

module.exports = (passport, config, models = {}) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.get('auth:secret'),
  };
  const { User } = models;

  return new Strategy(options, async (jwtPayload, done) => {
    let user;

    try {
      user = await User.findOne();
    } catch (err) {
      return done(err);
    }

    return done(null, user);
  });
};
