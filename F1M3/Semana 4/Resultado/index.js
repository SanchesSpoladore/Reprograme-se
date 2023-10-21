const prompt = require('prompt-sync')();

const alturas = [];

for (let i = 1; i <= 10; i++) {
  const altura = parseFloat(prompt(`Digite a altura: `));
  alturas.push(altura);
}

for (let i = 0; i < 10; i++) {
  let alturasMenores = 0;

  for (let j = 0; j < 10; j++) {
    if (alturas[j] < alturas[i]) {
      alturasMenores++;
    }
  }

  console.log(`O aluno ${i}: maior que ${alturasMenores} aluno(s)`);
}
