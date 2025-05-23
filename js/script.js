
//Carrossel de Imagens
const carrossel = document.getElementById('carrossel');
const imagens = carrossel.querySelectorAll('img');
const anterior = document.getElementById('anterior');
const proximo = document.getElementById('proximo');
    
let indiceAtual = 0;
    
anterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : imagens.length - 1;
  atualizarCarrossel();
});
    
proximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual < imagens.length - 1) ? indiceAtual + 1 : 0;
  atualizarCarrossel();
});
    
function atualizarCarrossel() {
  carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

// Menu Responsivo
const toggleMenu = document.getElementById('toggle-menu');
const menuBaixoLista = document.getElementById('menu-baixoListaResponsivo');

toggleMenu.addEventListener('click', () => {
    menuBaixoLista.classList.toggle('hide');
    menuBaixoLista.classList.toggle('show');
    toggleMenu.classList.toggle('open');
});