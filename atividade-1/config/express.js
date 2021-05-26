const express = require("express");

module.exports = () => {
  let app = express();
  app.set("port", 8394);
  return app;
};
