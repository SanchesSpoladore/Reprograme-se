const prompt = require('prompt-sync')();

const idade = parseInt(prompt("Digite sua idade: "));
const tempoDeServico = parseInt(prompt("Digite seu tempo de serviço: "));
const ultimoSalario = parseFloat(prompt("Digite seu salário: "));

const salarioMinimo = 1212.00;
const salarioMaximo = 7087.22;

let valorAposentadoria = 0;

if (idade >= 65 || tempoDeServico >= 30 || (idade >= 60 && tempoDeServico >= 25)) {
    if (tempoDeServico > 20) {
        valorAposentadoria = 0.8 * ultimoSalario;
    } else {
        valorAposentadoria = 0.6 * ultimoSalario;
    }

    valorAposentadoria = Math.max(salarioMinimo, Math.min(salarioMaximo, valorAposentadoria));

    console.log("Você pode se aposentar!");
    console.log("O valor de sua aposentadoria é R$ " + valorAposentadoria.toFixed(2));
} else {
    console.log("Você não atende aos requisitos mínimos para aposentadoria.");
}