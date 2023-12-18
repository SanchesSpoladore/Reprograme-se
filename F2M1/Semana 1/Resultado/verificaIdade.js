const prompt = require("prompt-sync")();

function verificaIdade(dataNascimentoUsuario) {
  let dataNascimento = dataNascimentoUsuario.split("/");
  dataNascimentoAno = new Date(
    dataNascimento[2],
    dataNascimento[1],
    dataNascimento[0]
  ).getFullYear();
  const dataHoje = new Date().getFullYear();
  const idade = dataHoje - dataNascimentoAno;

  let tituloEleitor = "";
  if (idade >= 18) {
    tituloEleitor = prompt("Digite o seu titulo de eleitor: ");
  }

  return tituloEleitor;
}

module.exports = verificaIdade;