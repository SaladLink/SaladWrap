const { SaladAuth } = require('./api/auth.js');
const { SaladProfile } = require('../src/api/profile.js');
const { SaladWrapError } = require('../src/error.js');

class SaladWrapper {
  constructor() {
    this.auth = null;
    this.session = null;
  }

  async connect(email) {
    const auth = new SaladAuth();
    const response = await auth.authenticate(email);
    if (response instanceof Error) throw new SaladWrapError(response.response.status, 'Failed to authenticate.');
    this.session = response;
    this.auth = auth;
  }

  async verify(passcode) {
    if (!this.session) throw new SaladWrapError(404, 'Session does not exist. Please authenticate first.')
    await this.auth.verify(this.session, passcode);
  }

  async session() {
    return this.session
  }

  async getProfile() {
    const profile = await new SaladProfile(this.session);
    return profile
  }

  async _getProfile() {
    const profile_ext = '/api/v1/profile';
    const profile_data = await this.session.get(profile_ext)
    return profile_data.data
  }

  async _getBalance() {
    const balance_ext = '/api/v1/profile/balance'
    const balance_data = await this.session.get(balance_ext)
    return balance_data.data
  }

  
}

module.exports.SaladWrapper = SaladWrapper