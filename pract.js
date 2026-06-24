const routes = {
  "/": function () {
    console.log("Home Page");
  },
  "/about": function () {
    console.log("About Page");
  },
};

const path = "/";

routes[path]();
