const Cliente = require('./clienteModel');

let clientes = [];

const listarClientes = (req, res) => {
  res.json(clientes);
};

const adicionarCliente = (req, res) => {
  const {
    nome,
    endereco,
    telefone,
    email
  } = req.body;
  if (!nome || !endereco || !telefone || !email) {
    return res.status(400).json({
      message: 'Todos os campos são obrigatórios.'
    });
  }
  const novoCliente = new Cliente(clientes.length + 1, nome, endereco, telefone, email);
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
};

const atualizarCliente = (req, res) => {
  const id_cliente = parseInt(req.params.id_cliente);
  if (isNaN(id_cliente)) {
    return res.status(400).json({
      message: 'O ID do cliente deve ser um número válido.'
    });
  }
  const {
    nome,
    endereco,
    telefone,
    email
  } = req.body;
  if (!nome || !endereco || !telefone || !email) {
    return res.status(400).json({
      message: 'Todos os campos são obrigatórios.'
    });
  }
  const clienteIndex = clientes.findIndex(cliente => cliente.id_cliente === id_cliente);
  if (clienteIndex !== -1) {
    clientes[clienteIndex] = {
      ...clientes[clienteIndex],
      nome,
      endereco,
      telefone,
      email
    };
    res.json(clientes[clienteIndex]);
  } else {
    res.status(404).send('Cliente não encontrado');
  }
};

const removerCliente = (req, res) => {
  const id_cliente = parseInt(req.params.id_cliente);
  if (isNaN(id_cliente)) {
    return res.status(400).json({
      message: 'O ID do cliente deve ser um número válido.'
    });
  }
  const clienteIndex = clientes.findIndex(cliente => cliente.id_cliente === id_cliente);
  if (clienteIndex !== -1) {
    clientes.splice(clienteIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Cliente não encontrado');
  }
};

module.exports = {
  listarClientes,
  adicionarCliente,
  atualizarCliente,
  removerCliente
};