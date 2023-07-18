const mongoose = require('mongoose');
const ChatGPT = require('../models/Chatgpt');
const axios = require('axios');

module.exports = {

  //============================================================
  //Controlers utilizados para comunicar com ChatGPT
  //============================================================
  async sendMessageToChatGPT(req, res) {
    const message = req.body.message;
    const apiKey = 'sua_chave_de_api_do_ChatGPT'; // Substitua com sua própria chave de API
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };

    const data = {
      'model': 'gpt-3.5-turbo', // Modelo do ChatGPT
      'messages': [
        { 'role': 'system', 'content': 'Você é um bot' }, // Papel do sistema
        { 'role': 'user', 'content': message } // Papel do usuário, mensagem enviada pelo usuário
      ]
    };

    try {
      const res = await axios.post(apiUrl, data, { headers });
      return res.data.choices[0].message.content; // Retorna a resposta do ChatGPT
    } catch (error) {
      throw new Error('Erro ao enviar mensagem para o ChatGPT:', error);
    }
  },

  //==============================================================
  //  Controllers utilizados para gerenciar informações de interações com ChatGPT
  //==============================================================  

  // lista todos as interações de todos os usuários com chatgpt 
  async show(req, res) {
    let chatgpts = await ChatGPT.find();
    return res.json(chatgpts);
  },
  //lista todos as interações de um único usuário
  async indexbyUserId(req, res) {
    let chatgpts = await ChatGPT.find(
      { _idUser: req.params.id }
    );
    return res.json(chatgpts);
  },
  // //lista a interação com base em um id único
  async indexbyChatGPTId(req, res) {
    let chatgpt = await ChatGPT.find(
      { _id: req.params.id }
    );
    return res.json(chatgpt);
  },
  // adiciona ranking
  async store(req, res) {
    const chatgpt = await ChatGPT.create(req.body);

    return res.json(chatgpt);
  },
  // deleta ranking de jogador
  async destroy(req, res) {
    let chatgpt = await ChatGPT.findByIdAndRemove(req.params.id);
    return res.json(chatgpt);
  },

  // altera ranking de jogador
  // devesse passar dois dados: o id via param e o json via body
  async update(req, res) {
    let chatgpt = await ChatGPT.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(chatgpt);
  }

};