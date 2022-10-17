//* Dark mode Tampilan Untuk membuat fungsi dimana, Tampilan layar akan berwarna gelap 
function darkMode() {
  const element = document.body;
  element.classList.toggle('dark-mode');
}

const hamburgerButton = document.querySelector('#menu__mobile');
const drawer = document.querySelector('#drawer');

hamburgerButton.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});