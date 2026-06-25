import NodeFrame from "./src/NodeFrame.js";

const app = new NodeFrame();

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    name: "Harshit",
    age: 24,
  });
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

app.listen(8000);
