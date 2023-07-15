//UserController.js
const User = require('./User');

function cadastrarUsuario(req, res) {
  res.json("CadastrarUsuario foi chamado");
}

module.exports = {
  cadastrarUsuario
};

