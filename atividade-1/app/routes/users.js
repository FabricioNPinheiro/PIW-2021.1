const controller = require("../controllers/users");

module.exports = (app) => {
  // ENDPOINT USERS

  // POST - Inserir usuário
  app.post("/usuarios", controller.insertUsers);

  // GET - Listar usuários
  app.get("/usuarios", controller.listUsers);

  // GET - Retorna usuário com um dado ID
  app.get("/usuarios/:id", controller.searchUserById);

  // DELETE - Remove usuário com id dado
  app.delete("/usuarios/:id", controller.removeUserById);

  // ENDPOINT POSTS

  // POST - Inserir Posts
  app.post("/posts", controller.insertPosts);

  // GET - Listar Posts
  app.get("/posts", controller.listPosts);

  // GET - Retorna Post com um dado ID
  app.get("/posts/:id", controller.searchPostById);

  // DELETE - Remove Post
  app.delete("/posts/:id", controller.removePostById);
};
