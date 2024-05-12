class Cliente {
  constructor(id_cliente, nome, endereco, telefone, email) {
    this.id_cliente = id_cliente;
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
  }
}

module.exports = Cliente;