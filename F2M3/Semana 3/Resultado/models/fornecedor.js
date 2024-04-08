const {
  DataTypes
} = require('sequelize');
const sequelize = require('../database');

const Fornecedor = sequelize.define('fornecedor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  ifNotExists: true
});

module.exports = Fornecedor;