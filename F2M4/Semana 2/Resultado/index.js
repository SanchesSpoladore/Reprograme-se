const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const clienteController = require('./clienteController');

app.use(bodyParser.json());

app.get('/clientes', clienteController.listarClientes);
app.post('/clientes', clienteController.adicionarCliente);
app.put('/clientes/:id_cliente', clienteController.atualizarCliente);
app.delete('/clientes/:id_cliente', clienteController.removerCliente);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});