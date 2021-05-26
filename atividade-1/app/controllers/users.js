// ARRAY USERS
let Users = [
  { id: 2, nome: "Lionel Messi", email: "messi@gmail.com", senha: 10 },
  { id: 3, nome: "Cristiano Ronaldo", email: "ronaldo@gmail.com", senha: 07 },
  { id: 4, nome: "Neymar Júnior", email: "neymar@gmail.com", senha: 11 },
];

// ARRAY POSTS
let posts = [
  { id: 5, texto: "Tudo bom! E vc?", likes: 6 },
  { id: 2, texto: "Hoje o dia foi divertido", likes: 8 },
  { id: 3, texto: "Corinthians Maior Campeão Paulista", likes: 7 },
];

// CONTROLLERS USERS

// Inserir Usuários
module.exports.insertUsers = (req, res) => {
  let user = req.body;
  Users.push(user);
  res.status(201).json(user);
};

// Listar Usuários
module.exports.listUsers = (req, res) => {
  let return_users = Users;
  if (return_users.length > 0) res.json(return_users);
  else res.status(404).json({ message: "Lista de usuários vazia" });
};

// Buscar Usuário por ID
module.exports.searchUserById = (req, res) => {
  let id = req.params.id;
  let user = Users.find((user) => {
    return user.id == id;
  });
  if (user) res.json(user);
  else res.status(404).json({ message: "Usuario não encontrado" });
};

// Deletar Usuário por ID
module.exports.removeUserById = (req, res) => {
  let id = req.params.id;
  Users = Users.filter((user) => {
    return user.id != id;
  });
  res.json({ message: "Usuário removido" });
};

// CONTROLLERS POSTS

// Inserir Posts
module.exports.insertPosts = (req, res) => {
  let post = req.body;
  posts.push(post);
  res.status(201).json(post);
};

// Listar Posts
module.exports.listPosts = (req, res) => {
  let retorno_posts = posts;
  if (retorno_posts.length > 0) res.json(retorno_posts);
  else res.status(404).json({ message: "Lista de posts vazia" });
};

// Buscar Post por ID
module.exports.searchPostById = (req, res) => {
  let id = req.params.id;
  let post = posts.find((post) => {
    return post.id == id;
  });
  if (post) res.json(post);
  else res.status(404).json({ message: "Post não encontrado" });
};

// Deletar Post por ID
module.exports.removePostById = (req, res) => {
  let id = req.params.id;
  posts = posts.filter((post) => {
    return post.id != id;
  });
  res.json({ message: "Post removido" });
};
