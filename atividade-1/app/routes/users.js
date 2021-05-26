const controller = require("../controllers/users");

module.exports = (app) => {
  // ENDPOINT USERS

  // POST - Inserir usuário
  app.post("/usuarios", controller.inserirUsuarios);

  // GET - Listar usuários
  app.get("/usuarios", controller.listarUsuarios);

  // GET - Retorna usuário com um dado ID
  app.get("/usuarios/:id", controller.buscarUsuarioPorId);

  // DELETE - Remove usuário com id dado
  app.delete("/usuarios/:id", controller.removerUsuarioPorId);

  // ENDPOINT POSTS

  // POST - Inserir Posts
  app.post("/posts");

  // GET - Listar Posts
  app.get("/posts");

  // GET - Retorna Post com um dado ID
  app.get("/posts/:id");

  // DELETE - Remove Post
  app.delete("/posts/:id");
};
