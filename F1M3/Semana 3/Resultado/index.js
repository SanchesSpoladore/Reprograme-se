let somaQuadradosPares = 0;
let somaQuadradosImpares = 0;

for (let i = 1; i <= 20; i++) {
  let quadrado = i * i;
  console.log(`O quadrado de ${i} é ${quadrado}`);
  
  if (quadrado % 2 === 0) {
    somaQuadradosPares += quadrado;
  } else {
    somaQuadradosImpares += quadrado;
  }
}

console.log(`Soma dos quadrados pares: ${somaQuadradosPares}`);
console.log(`Soma dos quadrados ímpares: ${somaQuadradosImpares}`);
