const express = require('express');
const router = express.Router();

let estados = [];

router.get('/', (req, res) => {
  res.json(estados);
});

router.post('/', (req, res) => {
  const novoEstado = req.body;
  estados.push(novoEstado);
  res.status(201).json(novoEstado);
});

module.exports = router;