//UserRouter.js

const User = require('./User');
const UserController = require('./UserController');

const express = require('express');
const rotas = express.Router();

rotas.get('/', (req, res) => {
  res.json('Olá mundo na rota de usuários');
});

rotas.get('/perfil', (req, res) => {   // ok
  res.json('Perfil do usuário');
});

rotas.post('/cadastro', UserController.cadastrarUsuario);  // ok 

module.exports = rotas;