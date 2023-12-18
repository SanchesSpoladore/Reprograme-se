const coletaDados = require("./coletaDados");
const prompt = require("prompt-sync")();

function mostrarDados(dados) {
  console.log(`Nome Completo: ${dados.nomeCompleto}`);
  console.log(`RG: ${dados.RG}`);
  console.log(`CPF: ${dados.CPF}`);
  console.log(`Data de Nascimento: ${dados.dataNascimento}`);

  if (dados.tituloEleitor) {
    console.log(`Título de Eleitor: ${dados.tituloEleitor}`);
  }

  const confirmacaoDados = prompt(
    'Os dados estão corretos? (Digite "sim" para confirmar, ou qualquer outra coisa para corrigir): '
  );
  if (confirmacaoDados.toLowerCase() === "sim") {
    console.log("\nCadastro finalizado. Obrigado!");
    console.log("### Sistema de Cadastro ###\n");
  } else {
    console.log("\nCorrigir os dados: ");
    mostrarDados(coletaDados());
    console.log("### Sistema de Cadastro ###\n");
  }
}

module.exports = mostrarDados;