// ARRAY USERS
let usuarios = [
  { id: 2, nome: "Fabrício", email: "fabricio@gmail.com", senha: 111 },
  { id: 3, nome: "Larissa", email: "larissa@gmail.com", senha: 222 },
  { id: 4, nome: "Lionel", email: "lionel@gmail.com", senha: 333 },
];
// ARRAY POSTS
let posts = [
  { id: 5, texto: "Tudo bom! E vc?", likes: 6 },
  { id: 2, texto: "Hoje é Quarta", likes: 8 },
  { id: 3, texto: "Corinthians Maior Campeão Paulista", likes: 7 },
];

// CONTROLLERS USERS

// Inserir Usuários
module.exports.inserirUsuarios = function (req, res) {
  let usuario = req.body;
  usuarios.push(usuario);
  res.status(201).json(usuario);
};

// Listar Usuários
module.exports.listarUsuarios = function (req, res) {
  let retorno_usuarios = usuarios;
  if (retorno_usuarios.length > 0) res.json(retorno_usuarios);
  else res.status(404).json({ mensagem: "Lista de usuários vazia" });
};

// Buscar Usuário por ID
module.exports.buscarUsuarioPorId = function (req, res) {
  let id = req.params.id;
  let usuario = usuarios.find((usuario) => {
    return usuario.id == id;
  });
  if (usuario) res.json(usuario);
  else res.status(404).json({ mensagem: "Usuario não encontrado" });
};

// Deletar Usuário por ID
module.exports.removerUsuarioPorId = (req, res) => {
  let id = req.params.id;
  usuarios = usuarios.filter((usuario) => {
    return usuario.id != id;
  });
  res.json({ mensagem: "Usuário removido" });
};

// CONTROLLERS POSTS

// Inserir Posts
module.exports.inserirPosts = (req, res) => {
  let post = req.body;
  posts.push(post);
  res.status(201).json(post);
};

// Listar Posts
module.exports.listarPosts = (req, res) => {
  let retorno_posts = posts;
  if (retorno_posts.length > 0) res.json(retorno_posts);
  else res.status(404).json({ mensagem: "Lista de posts vazia" });
};

// Buscar Post por ID
module.exports.buscarPostById = (req, res) => {
  let id = req.params.id;
  let post = posts.find((post) => {
    return post.id == id;
  });
  if (post) res.json(post);
  else res.status(404).json({ mensagem: "Post não encontrado" });
};

module.exports.deletarPostById = (req, res) => {
  let id = req.params.id;
  posts = posts.filter((post) => {
    return post.id != id;
  });
  res.json({ mensagem: "Post removido" });
};
