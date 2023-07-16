//UserController.js
const User = require('./User');
const mongoose = require('mongoose');

async function cadastrarUsuario(req, res) {
  const { nickname, email, password } = req.body;

  const user = await User.create({ nickname, email, password });
  return res.status(200).json(user);
}

async function update(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
  }
}


async function show(req, res) {
  let users = await User.find();
  console.log("Users show", users);
  return res.json(users);

}


async function destroy(req, res) {
  let user = await User.findByIdAndRemove(req.params.id);
  return res.json(user);
}

async function loginUsuario(req, res) {
  let users = await User.find(
    { email: req.query.email }
  );
  console.log("users", users);
  return res.json(users);

}

async function carrinhoUsuario(req, res) {

  res.json("carrinholUsuario foi chamado");
}


async function perfilUsuario(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar perfil do usuário', error: error.message });
  }
}


module.exports = {
  show, cadastrarUsuario, loginUsuario, carrinhoUsuario, perfilUsuario, update, destroy
};

