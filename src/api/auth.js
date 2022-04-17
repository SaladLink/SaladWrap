const axios = require('axios');
const { wrapper } = require('axios-cookiejar-support');
const { CookieJar } = require('tough-cookie');

class SaladAuth {
  constructor() {
    this.BASE_URL = "https://app-api.salad.io";
  };
  
  async authenticate(email) {
    
    const jar = new CookieJar();
    const session = wrapper(axios.create({ jar, baseURL: this.BASE_URL, withCredentials: true }));
    
    const auth_ext = '/api/v2/authentication-sessions';
    const auth_payload = {
      "email": email,
      "termsAccepted": true
    };

    try {
      await session.post(auth_ext, auth_payload);
      return session
    }
    catch (error) {
      return error
      // error.response.status
    }
    
  };

  async verify(session, passcode) {
    
    const verification_ext = '/api/v2/authentication-sessions/verification'
    const verification_payload = {
      "passcode": passcode
    }

    await session.post(verification_ext, verification_payload);
    return session
  }
  
};

module.exports.SaladAuth = SaladAuth;