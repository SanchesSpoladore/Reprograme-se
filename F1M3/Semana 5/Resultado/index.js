const prompt = require('prompt-sync')();
var arrayPerfumes = [];

function inserirPerfume(perfume) {
  arrayPerfumes.push(perfume);
}

function excluirPerfume(codigo) {
  const index = arrayPerfumes.findIndex(perfume => perfume.codigo === codigo);
  if (index !== -1) {
    arrayPerfumes.splice(index, 1);
  }
}

function listarPerfumes() {
  arrayPerfumes.forEach(perfume => {
    console.log(`${perfume.codigo}: ${perfume.nome} - ${perfume.marca} - ${perfume.fragancia} - ${perfume.concentracao}`);
  });
}

do {
  console.log("Sistema de Cadastro de Perfumes");
  console.log("1 - Inserir Perfume");
  console.log("2 - Excluir Perfume");
  console.log("3 - Listar Perfumes");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Perfume...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let nome = prompt("Digite o nome: ");
    let marca = prompt("Digite a marca: ");
    let fragancia = prompt("Digite a fragancia: ");
    let concentracao = prompt("Digite a concentração: ");

    const perfume = {
      codigo: codigo,
      nome: nome,
      marca: marca,
      fragancia: fragancia,
      concentracao: concentracao
    }

    inserirPerfume(perfume);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Perfume...\n");
    let codigo = parseInt(prompt("Digite o código do perfume: "));
    excluirPerfume(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Perfumes...\n");
    listarPerfumes();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0);