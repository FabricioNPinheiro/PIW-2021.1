// ARRAY USERS
let usuarios = [
  { id: 2, nome: "Fabrício", email: "fabricio@gmail.com", senha: 111 },
  { id: 3, nome: "Larissa", email: "larissa@gmail.com", senha: 222 },
  { id: 4, nome: "Lionel", email: "lionel@gmail.com", senha: 333 },
];
// ARRAY POSTS
let posts = [
  { id: 2, texto: "Hoje é Quarta", likes: 8 },
  { id: 3, texto: "Corinthians Maior Campeão Paulista", likes: 7 },
  { id: 4, texto: "Front-end é Muito Massa", likes: 10 },
  { id: 5, texto: "Back-end é muito abstrato", likes: 15 },
];

// CONTROLLERS USERS
module.exports.inserirUsuarios = function (req, res) {
  let usuario = req.body;
  usuarios.push(usuario);
  res.status(201).json(usuario);
};

module.exports.listarUsuarios = function (req, res) {
  let retorno_usuarios = usuarios;
  if (retorno_usuarios.length > 0) res.json(retorno_usuarios);
  else res.status(404).json({ mensagem: "Lista de usuários vazia" });
};

module.exports.buscarUsuarioPorId = function (req, res) {
  let id = req.params.id;
  let usuario = usuarios.find((usuario) => {
    return usuario.id == id;
  });
  if (usuario) res.json(usuario);
  else res.status(404).json({ mensagem: "Usuario não encontrado" });
};

module.exports.removerUsuarioPorId = (req, res) => {
  let id = req.params.id;
  usuarios = usuarios.filter((usuario) => {
    return usuario.id != id;
  });
  res.json({ mensagem: "Usuário foi removido" });
};

// CONTROLLERS POSTS
