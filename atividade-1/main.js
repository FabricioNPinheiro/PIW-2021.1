const http = require("http");
const app = require("./config/express")();

http.createServer(app).listen(app.get("port"), () => {
  console.log("Servidor express iniciado com sucesso " + app.get("port"));
});
