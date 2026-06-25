import http from "http";
import enhanceResponse from "./Response.js";

class NodeFrame {
  constructor() {
    this.routes = {};
  }

  get(path, handler) {
    this.routes[path] = handler;
  }
  listen(port) {
    const server = http.createServer((req, res) => {
      res = enhanceResponse(res);
      const handler = this.routes[req.url];
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
