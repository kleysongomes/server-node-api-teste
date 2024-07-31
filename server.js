const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.put('/api/users/update/:cod', (req, res) => {
  const { cod } = req.params;
  const { nome, nomereduz, documento, email, tipoPessoa, telefone, ddd } = req.body;
  const authorization = req.headers.authorization;

  console.log(`Recebido atualização para o usuário: ${cod}`);
  console.log(`Nome: ${nome}`);
  console.log(`Nome Reduzido: ${nomereduz}`);
  console.log(`Documento: ${documento}`);
  console.log(`Email: ${email}`);
  console.log(`Tipo de Pessoa: ${tipoPessoa}`);
  console.log(`Telefone: ${telefone}`);
  console.log(`DDD: ${ddd}`);
  console.log(`Authorization Header: ${authorization}`);

  res.status(200).send(`Usuário ${cod} atualizado com sucesso!`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
