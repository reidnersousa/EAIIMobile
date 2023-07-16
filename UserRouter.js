//UserRouter.js

const User = require('./User');


const UserController = require('./UserController');

const express = require('express');
const rotas = express.Router();

rotas.get('/', (req, res) => {
  res.json('Olá mundo na rota de usuários');


});

rotas.get('/lista', UserController.show);

rotas.get('/perfil/:id', UserController.perfilUsuario);



rotas.put('/:id', UserController.update); // não consigo atualizar o que eesta na banco e retorna valor antigo  
rotas.delete('/:id', UserController.destroy); // usando delete eu apago o que esta no banco 


rotas.get('/carrinho', UserController.carrinhoUsuario); //ok
rotas.post('/cadastro', UserController.cadastrarUsuario);  // arruma o metodo apresenta erro ao inserir nome email e senha
rotas.post('/login', UserController.loginUsuario);  //ok

module.exports = rotas;