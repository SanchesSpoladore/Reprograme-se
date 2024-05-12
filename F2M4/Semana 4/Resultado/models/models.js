class Funcionario {
  constructor(id_funcionario, nome, email, senha) {
    this.id_funcionario = id_funcionario;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}

module.exports = {
  Funcionario
};