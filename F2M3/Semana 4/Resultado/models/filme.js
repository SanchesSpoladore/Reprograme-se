const {
  DataTypes
} = require('sequelize');
const sequelize = require('../config/database');

const Filme = sequelize.define('Filme', {
  id_filme: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link_sinopse: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Filme;