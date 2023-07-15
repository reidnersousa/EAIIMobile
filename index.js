const express = require('express');
const app = express();

const userRouter = require('./UserController');
app.use('/users', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});