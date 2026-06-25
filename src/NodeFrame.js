import http from "http";
import enhanceResponse from "./Response.js";
import enhanceRequest from "./Request.js";

class NodeFrame {
  constructor() {
    this.routes = {
      GET: {},
      POST: {},
      PUT: {},
      PATCH: {},
      DELETE: {},
    };
  }

  get(path, handler) {
    this.routes.GET[path] = handler;
  }
  post(path, handler) {
    this.routes.POST[path] = handler;
  }
  put(path, handler) {
    this.routes.PUT[path] = handler;
  }
  patch(path, handler) {
    this.routes.PATCH[path] = handler;
  }
  delete(path, handler) {
    this.routes.DELETE[path] = handler;
  }
  listen(port) {
    const server = http.createServer((req, res) => {
      res = enhanceResponse(res);
      const url = new URL(req.url, `http://${req.headers.host}`);
      req = enhanceRequest(req, url);
      const pathname = url.pathname;
      const handler = this.routes[req.method]?.[pathname];

      if (!handler) {
        res.statusCode = 404;
        return res.end("Not Found");
      }

      handler(req, res);
    });
    server.listen(port);
  }
}

export default NodeFrame;
