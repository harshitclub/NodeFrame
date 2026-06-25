function enhanceRequest(req, url) {
  req.query = {};
  for (const [key, value] of url.searchParams) {
    req.query[key] = value;
  }

  return req;
}

export default enhanceRequest;
