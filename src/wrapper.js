const { SaladAuth } = require('/home/runner/SaladWrap/src/api/auth.js');
const { SaladWrapError } = require('/home/runner/SaladWrap/src/error.js');

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

  async profile() {
    const profile_ext = '/api/v1/profile';
    const profile_data = await this.session.get(profile_ext)
    return profile_data.data
  }

  async email() {
    const profile_ext = '/api/v1/profile';
    const profile_data = await this.session.get(profile_ext)
    return profile_data.data['email']
  }

  async extensions() {
    const profile_ext = '/api/v1/profile';
    const profile_data = await this.session.get(profile_ext)
    return profile_data.data['extensions']
  }

  async minecraft() {
    const profile_ext = '/api/v1/profile';
    const profile_data = await this.session.get(profile_ext)
    return profile_data.data['extensions']['minecraftUsername']
  }

  async id() {
    const profile_ext = '/api/v1/profile';
    const profile_data = await this.session.get(profile_ext)
    return profile_data.data['id']
  }

  async username() {
    const profile_ext = '/api/v1/profile';
    const profile_data = await this.session.get(profile_ext)
    return profile_data.data['username']
  }

  async balance() {
    const balance_ext = '/api/v1/profile/balance'
    const balance_data = await this.session.get(balance_ext)
    return balance_data.data
  }

  async currentBalance() {
    const balance_ext = '/api/v1/profile/balance'
    const balance_data = await this.session.get(balance_ext)
    return balance_data.data['currentBalance']
  }

  async lifetimeBalance() {
    const balance_ext = '/api/v1/profile/balance'
    const balance_data = await this.session.get(balance_ext)
    return balance_data.data['lifetimeBalance']
  }
  
}

module.exports.SaladWrapper = SaladWrapper