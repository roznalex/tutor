const AuthService = require('./Auth.service');

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  register(req) {
    return this.authService.register(req.body);
  }

  login(req) {
    return this.authService.login(req.body);
  }
}

module.exports = AuthController;
