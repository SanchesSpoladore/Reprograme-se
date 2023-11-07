var elementosPreco = document.getElementsByClassName('produto_preco');

var soma = 0;

for (var i = 0; i < elementosPreco.length; i++) {
  var preco = parseFloat(elementosPreco[i].innerText);
  soma += preco;
}

document.write("A soma dos preços é: " + soma.toFixed(2));