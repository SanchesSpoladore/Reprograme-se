function inserirPendrive() {
  const pendrive = {
    marca: document.getElementById('marca').value,
    capacidade: document.getElementById('capacidade').value,
    interface: document.getElementById('interface').value,
    velocidade: document.getElementById('velocidade').value,
    tipo: document.getElementById('tipo').value,
    preco: document.getElementById('preco').value
  };
  const bd_pendrives = getLocalStorage();
  bd_pendrives.push(pendrive);
  setLocalStorage(bd_pendrives);
  atualizarTabelaPendrives();
}

function atualizarTabelaPendrives() {
  limparTabela();
  const bd_pendrives = getLocalStorage();
  let index = 0;
  for (pendrive of bd_pendrives) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${pendrive.marca}</td>
        <td>${pendrive.capacidade}</td>
        <td>${pendrive.interface}</td>
        <td>${pendrive.velocidade}</td>
        <td>${pendrive.tipo}</td>
        <td>${pendrive.preco}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluirPendrive(${index})">Excluir</button>
        </td>
    `;
    document.querySelector('#tabela>tbody').appendChild(novaLinha);
    index++;
  }
}

function excluirPendrive(index) {
  const bd_pendrives = getLocalStorage();
  bd_pendrives.splice(index, 1);
  setLocalStorage(bd_pendrives);
  atualizarTabelaPendrives();
}

function validarMarca() {
  const bd_pendrives = getLocalStorage();
  const marcaInput = document.getElementById('marca').value;
  for (pendrive of bd_pendrives) {
    if (marcaInput === pendrive.marca) {
      marca.setCustomValidity("Esta marca já existe!");
      return false;
    } else {
      marca.setCustomValidity("");
    }
  }
  return true;
}

const marca = document.getElementById("marca");
marca.addEventListener('input', validarMarca);
