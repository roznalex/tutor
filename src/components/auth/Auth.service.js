const jwt = require('jsonwebtoken');

const config = require('../../../tools/config');

const UserModel = require('../user/user.model');

class AuthorizationService {
  constructor() {
    this.userModel = UserModel;
  }

  async register(data) {
    const { email, password, role, firstName, lastName } = data;

    const user = await this.userModel.findOne({ email });

    if (user) {
      throw new Error('That email address already exists.');
    }

    const createdUser = this.userModel.create({
      email,
      password,
      role,
      name: {
        first: firstName,
        last: lastName,
      },
    });

    return Boolean(createdUser);
  }

  async login(data) {
    const { email, password } = data;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new Error('Authentication failed');
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (isPasswordCorrect) {
      return {
        jwt: jwt.sign(user, config.get('auth:secret'), { expiresIn: 60 * 60 }),
      };
    }

    throw new Error('Authentication failed');
  }
}

module.exports = AuthorizationService;
