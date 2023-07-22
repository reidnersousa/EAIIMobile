//UserRouter.js

const User = require('./User');


const UserController = require('./UserController');

const express = require('express');
const rotas = express.Router();

rotas.get('/', (req, res) => {
  res.json('Olá mundo na rota de usuários');


});

// https://eaiimobile.reidnersantos.repl.co/users/lista
rotas.get('/lista', UserController.show);

// https://eaiimobile.reidnersantos.repl.co/users/perfil/64b3312e12b6d9b483327771
rotas.get('/perfil/:id', UserController.perfilUsuario);


//https:eaiimobile.reidnersantos.repl.co/users/perfil/64b1adaf447c30dc3a6f7c74
rotas.put('/perfil/:id', UserController.update); // consigo atualizar 

// https:eaiimobile.reidnersantos.repl.co/users/64b1adaf447c30dc3a6f7c74
rotas.delete('/:id', UserController.destroy); // ok 

// https://eaiimobile.reidnersantos.repl.co/users/64b3294f3541ab83e341ceb9
rotas.post('/:id', UserController.buscarUsuarioPeloId); // um post que recebe email e  senha 

// https://eaiimobile.reidnersantos.repl.co/users/carrinho
rotas.get('/carrinho', UserController.carrinhoUsuario); //ok

// cadastro/ tava dando erro entao que usa isso aqui  
// https://eaiimobile.reidnersantos.repl.co/users/cadastro/:
rotas.post('/cadastro/:', UserController.criarUsuario);  // ok 

// https://eaiimobile.reidnersantos.repl.co/users/login/User2IFB@gmail.com
rotas.post('/login/:email/:password', UserController.loginUsuario);  // ok 

rotas.post('/login', UserController.loginUsuario);  // ok 

// não sei pq mas da erro aqui a unica diferença e teste/:
// rotas.post('/teste', UserController.cadastrarUsuario);  // ok 




module.exports = rotas;