const express = require("express");
const routerUsuarios = require("../app/routes/users");
const bodyParser = require("body-parser");

module.exports = () => {
  let app = express();
  app.set("port", 8394);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  routerUsuarios(app);
  return app;
};
