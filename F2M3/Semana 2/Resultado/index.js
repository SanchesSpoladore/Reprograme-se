const {
  Sequelize,
  DataTypes
} = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const Setor = sequelize.define('Setor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ramal: {
    type: DataTypes.STRING,
    allowNull: false
  },
  e_mail: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

(async () => {
  await sequelize.sync();

  await Setor.bulkCreate([{
      nome: 'Contabilidade',
      ramal: '1234',
      e_mail: 'contabilidade@example.com'
    },
    {
      nome: 'Diretoria',
      ramal: '5678',
      e_mail: 'diretoria@example.com'
    },
    {
      nome: 'Recursos Humanos',
      ramal: '91011',
      e_mail: 'rh@example.com'
    }
  ]);

  const setores = await Setor.findAll();
  console.log("Todos os setores:");
  setores.forEach(setor => {
    console.log(`${setor.nome} - Ramal: ${setor.ramal} - E-mail: ${setor.e_mail}`);
  });

  await Setor.destroy({
    where: {
      nome: 'Contabilidade'
    }
  });

  await Setor.update({
    nome: 'Departamento Pessoal'
  }, {
    where: {
      nome: 'Recursos Humanos'
    }
  });

  const novosSetores = await Setor.findAll();
  console.log("\nTodos os setores após alterações:");
  novosSetores.forEach(setor => {
    console.log(`${setor.nome} - Ramal: ${setor.ramal} - E-mail: ${setor.e_mail}`);
  });
})();