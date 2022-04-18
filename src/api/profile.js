const axios = require('axios');
const { wrapper } = require('axios-cookiejar-support');
const { CookieJar } = require('tough-cookie');

class SaladProfile {
   constructor(session) {
     this.session = session;

    const profile_ext = '/api/v1/profile';
    const profile = session.get(profile_ext);
    
    this.email = profile.data['email'];
    this.extensions = profile.data['extensions'];
    this.minecraft = profile.data['extensions']['minecraftUsername'];
    this.id = profile.data['id']
    this.username = profile.data['username']
    this.viewedReferralOnboarding = profile.data['viewedReferralOnboarding']
    this.avatar = profile.data['avatar']
  };

  async setUsername(username) {
    const profile_ext = '/api/v1/profile';
    const profile = await session.get(profile_ext, {username: username} );
    return profile.data
  }
  
};

module.exports.SaladProfile = SaladProfile;