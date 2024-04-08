const express = require('express');
const bodyParser = require('body-parser');
const Fornecedor = require('./models/fornecedor');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/addfornecedor', async (req, res) => {
  const {
    nome,
    telefone,
    email
  } = req.body;

  try {
    const fornecedor = await Fornecedor.create({
      nome,
      telefone,
      email
    });
    console.log('Fornecedor adicionado:', fornecedor);
    res.send('Fornecedor adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar fornecedor:', error);
    res.status(500).send('Erro ao adicionar fornecedor. Por favor, tente novamente.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
