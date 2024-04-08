const sqlite3 = require("sqlite3").verbose();

const database = new sqlite3.Database("escola.sqlite", (err) => {
  if (err) {
    return console.error("Erro ao abrir o banco de dados:", err.message);
  }
  console.log("Conexão bem-sucedida com o banco de dados escola.sqlite");
});

database.run(`
  CREATE TABLE IF NOT EXISTS aluno (
    matricula INTEGER PRIMARY KEY,
    nome VARCHAR(60),
    email VARCHAR(40),
    cidade VARCHAR(60)
  )
`, (err) => {
  if (err) {
    return console.error("Erro ao criar a tabela aluno:", err.message);
  }
  console.log("Tabela aluno criada com sucesso");
});

database.serialize(() => {
  const alunos = [{
      matricula: 1,
      nome: 'João',
      email: 'joao@example.com',
      cidade: 'São Paulo'
    },
    {
      matricula: 2,
      nome: 'Maria',
      email: 'maria@example.com',
      cidade: 'Rio de Janeiro'
    },
    {
      matricula: 3,
      nome: 'Pedro',
      email: 'pedro@example.com',
      cidade: 'Belo Horizonte'
    }
  ];

  const inserirAluno = database.prepare("INSERT INTO aluno (matricula, nome, email, cidade) VALUES (?, ?, ?, ?)");
  alunos.forEach(aluno => {
    inserirAluno.run(aluno.matricula, aluno.nome, aluno.email, aluno.cidade, function (err) {
      if (err) {
        return console.error("Erro ao inserir aluno:", err.message);
      }
      console.log(`Aluno ${aluno.nome} inserido com sucesso!`);
    });
  });
  inserirAluno.finalize();

  database.all("SELECT matricula, nome FROM aluno", (err, rows) => {
    if (err) {
      return console.error("Erro ao selecionar os alunos:", err.message);
    }
    console.log("Matrícula e Nome dos Alunos:");
    rows.forEach(row => {
      console.log(`${row.matricula} - ${row.nome}`);
    });
  });
});

database.close((err) => {
  if (err) {
    return console.error("Erro ao fechar o banco de dados:", err.message);
  }
  console.log("Conexão com o banco de dados fechada com sucesso");
});