const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('', {
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

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
