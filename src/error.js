class SaladWrapError extends Error {  
  constructor (code, message) {
    super(`${code} ${message}`);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.status = code;
  };

  statusCode() {
    return this.status;
  };
};

module.exports.SaladWrapError = SaladWrapError;