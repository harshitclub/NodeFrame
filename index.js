import NodeFrame from "./src/NodeFrame.js";

const app = new NodeFrame();

app.get("/", (req, res) => {
  res.end("Home");
});

app.get("/about", (req, res) => {
  res.end("About");
});

app.listen(8000);
