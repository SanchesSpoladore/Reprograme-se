var cachorros = [
  { "nome": "Thor", "imagem": "dog1" },
  { "nome": "Zeca", "imagem": "dog2" },
  { "nome": "Zeus", "imagem": "dog3" },
  { "nome": "Pingo", "imagem": "dog4" }
];

var gatos = [
  { "nome": "Dunga", "imagem": "cat1" },
  { "nome": "Mika", "imagem": "cat2" },
  { "nome": "Conan", "imagem": "cat3" },
  { "nome": "Messi", "imagem": "cat4" }
];

var animais = document.getElementById("select_animais");
var container = document.getElementById("container");
var nomeAnimal = document.getElementById("nome");

animais.addEventListener("input", listarAnimais, false);
container.addEventListener("mouseover", mostrarNome, false);
container.addEventListener("mouseout", limparNome, false);

function listarAnimais() {
  limparDivContainer();

  if (animais.value == "cat") {
    adicionarImagensAoContainer(gatos);
  } else if (animais.value == "dog") {
    adicionarImagensAoContainer(cachorros);
  }
}

function adicionarImagensAoContainer(listaAnimais) {
  for (var i = 0; i < listaAnimais.length; i++) {
    var imagem = document.createElement("img");
    imagem.src = "img/" + listaAnimais[i].imagem + ".jpg";
    imagem.alt = listaAnimais[i].nome;
    container.appendChild(imagem);
  }
}

function mostrarNome(e) {
  if (e.target.tagName === "IMG") {
    nomeAnimal.innerText = e.target.alt;
  }
}

function limparNome() {
  nomeAnimal.innerText = "Nome do animal";
}

function limparDivContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}