import NodeFrame from "./src/NodeFrame.js";

const app = new NodeFrame();

/**
 * Home Route
 */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    framework: "NodeFrame",
    version: "3.0.0",
    message: "Welcome to NodeFrame 🚀",
  });
});

/**
 * Query Parameters Demo
 *
 * Example:
 * /users?page=1&limit=10
 * /users?page=2&limit=5
 */
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",

    query: req.query,
  });
});

/**
 * Product Search Demo
 *
 * Example:
 * /products?category=laptop&brand=apple
 */
app.get("/products", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Products fetched successfully",

    filters: req.query,
  });
});

/**
 * Movies Demo
 *
 * Example:
 * /movies?genre=action&year=2025
 */
app.get("/movies", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Movies fetched successfully",

    filters: req.query,
  });
});

app.listen(8000);
