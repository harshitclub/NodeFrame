function enhanceResponse(res) {
  res.send = function (data) {
    this.end(data);

    return this;
  };
  res.status = function (code) {
    this.statusCode = code;

    return this;
  };

  res.json = function (data) {
    const jsonData = JSON.stringify(data);
    this.setHeader("Content-Type", "application/json");
    this.end(jsonData);

    return this;
  };

  res.cookie = function (name, value, options = {}) {
    const defaultOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 86400000,
    };

    options = {
      ...defaultOptions,
      ...options,
    };

    let cookieString = `${name}=${value}`;

    if (options.httpOnly) {
      cookieString += "; HttpOnly";
    }

    if (options.secure) {
      cookieString += "; Secure";
    }

    if (options.maxAge) {
      cookieString += `; Max-Age=${Math.floor(options.maxAge / 1000)}`;
    }

    if (options.path) {
      cookieString += `; Path=${options.path}`;
    }

    if (options.sameSite) {
      cookieString += `; SameSite=${options.sameSite}`;
    }

    if (options.domain) {
      cookieString += `; Domain=${options.domain}`;
    }

    this.setHeader("Set-Cookie", cookieString);

    return this;
  };

  return res;
}

export default enhanceResponse;
