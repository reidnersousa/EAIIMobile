//UserController.js

const express = require('express');
const rotas = express.Router();

rotas.get('/', (req, res) => {
  res.json('Olá mundo na rota de usuários');
});

rotas.get('/perfil', (req, res) => {
  res.json('Perfil do usuário');
});

rotas.post('/cadastro', (req, res) => {
  // Lógica para cadastrar um usuário
});

module.exports = rotas;