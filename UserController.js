//UserController.js
const User = require('./User');
const mongoose = require('mongoose');

async function cadastrarUsuario(req, res) {
  console.log("Cadastro Chamdo ");
  try {
    const user = await User.create(req.body);
    return res.json(user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }
}





async function update(req, res) {
  try {
    const userId = req.params.id; // Obtenha o ID do parâmetro da rota
    const updates = req.body; // Dados a serem atualizados

    console.log("User Id ", userId);
    console.log("Update", updates);
    const user = await User.findOneAndUpdate(
      { _id: userId },
      updates,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar usuário' });
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
  const userEmailBody = req.body.email;
  const userPasswordBody = req.body.password;
  try {
    const user = await User.findOne({ email: userEmailBody, password: userPasswordBody });
    if (!user) {
      return res.status(404).json({ message: 'Email ou Usuario invalido ' });
    }
    console.log("user", user);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao logar no perfil do usuário', error: error.message });
  }
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

async function buscarUsuarioPeloId(req, res) {
  const userId = req.params.id; // Obtenha o ID do parâmetro da rota

  const user = await User.findById(userId).select('password email');
  if (!user) {
    return res.status(404).json({ message: 'Usuario invalido ' });
  }
  console.log("User Id", userId, "user", user);
  res.json("buscarUsuarioPeloId foi chamado");
}



async function criarUsuario(req, res) {
  const dadosParam = req.param.id;
  const dadosBody = req.body;

  console.log("dadosParam", dadosParam, "dadosBody", dadosBody);

  try {
    const user = await User.create(req.body);
    return res.json(user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }


}


module.exports = {
  show, cadastrarUsuario, loginUsuario, carrinhoUsuario, perfilUsuario, update, destroy, buscarUsuarioPeloId, criarUsuario
};

