const express = require('express');
const bodyParser = require('body-parser');
const rotasEstados = require('./estados');

const app = express();
const PORTA = process.env.PORTA || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('/estados', rotasEstados);

app.listen(PORTA, () => {
  console.log(`Servidor está rodando na porta ${PORTA}`);
});