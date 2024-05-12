const express = require('express');
const router = express.Router();
const {
  Funcionario
} = require('../models/models');

const funcionarios_db = {
  1: new Funcionario(1, "João", "joao@email.com", "senha123"),
  2: new Funcionario(2, "Maria", "maria@email.com", "senha456")
};

router.post('/login.html', (req, res) => {
  const {
    email,
    senha
  } = req.body;

  for (const funcionario of Object.values(funcionarios_db)) {
    if (funcionario.email === email && funcionario.senha === senha) {
      return res.redirect('/dashboard');
    }
  }

  return res.status(401).json({
    error: "Invalid credentials"
  });
});

router.get('/dashboard', (req, res) => {
  res.send('Página de dashboard');
});


module.exports = router;