//UserRouter.js
const User = require('./User');



const UserController = require('./UserController');

const express = require('express');
const rotas = express.Router();

rotas.get('/', (req, res) => {
  res.json('Olá mundo na rota de usuários');


});

rotas.get('/lista', UserController.show);
rotas.get('/perfil', UserController.perfilUsuario); //ok

rotas.put('/:id', UserController.update);
rotas.delete('/:id', UserController.destroy); // ok


rotas.get('/carrinho', UserController.carrinhoUsuario); //ok
rotas.post('/cadastro', UserController.cadastrarUsuario);  // arruma o metodo apresenta erro ao inserir nome  
rotas.post('/login', UserController.loginUsuario);  //ok

module.exports = rotas;