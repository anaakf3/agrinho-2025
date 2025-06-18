const menuBotao = document.querySelector('.menu');
const menuLateral = document.getElementById('menuLateral');
const fecharMenu = document.getElementById('fecharMenu');

// Abrir menu
menuBotao.addEventListener('click', () => {
  menuLateral.classList.add('aberto');
});

// Fechar menu
fecharMenu.addEventListener('click', () => {
  menuLateral.classList.remove('aberto');
});