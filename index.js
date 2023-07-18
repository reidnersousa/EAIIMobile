const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());

mongoose.connect('mongodb+srv://reidner:reidner123@cluster0.pypyx43.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao conectar com o MongoDB:', error);
  });

const userRouter = require('./UserRouter');
app.use('/users', userRouter);

//== Rotas para o Gerenciamento de interações com ChatGPT ===

const ChatGPTController = require('./controllers/ChatGPTController');

app.get('/manager/all/chatgpt', ChatGPTController.show);  // todas interações registradas
app.get('/manager/chatgpt/:id', ChatGPTController.indexbyUserId);
app.post('/manager/chatgpt', ChatGPTController.store);
app.put('/manager/chatgpt/:id', ChatGPTController.update);

//=========================================
//== Rotas para Comunicação com ChatGPT ===
app.post('/chatgpt', ChatGPTController.sendMessageToChatGPT);



const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
