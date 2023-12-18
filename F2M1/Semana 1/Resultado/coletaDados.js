const verificaIdade = require("./verificaIdade");
const prompt = require("prompt-sync")();

function coletaDados() {
  const nomeCompleto = prompt("Digite seu nome completo: ");
  const RG = prompt("Digite seu RG: ");
  const CPF = prompt("Digite seu CPF: ");
  const dataNascimento = prompt("Digite sua data de nascimento: ");

  const tituloEleitor = verificaIdade(dataNascimento);

  return {
    nomeCompleto,
    RG,
    CPF,
    dataNascimento,
    tituloEleitor
  };
}

module.exports = coletaDados;