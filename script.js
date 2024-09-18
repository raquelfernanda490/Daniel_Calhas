let hamburguer = document.getElementById('hamburguer');
let itens_menu = document.getElementById('itens_menu');

hamburguer.addEventListener('click', aparecer);

function aparecer() {
  if (itens_menu.style.display == 'block') {
    itens_menu.classList.remove('show');
  } else {
    itens_menu.classList.toggle('show');

  }

    
}


function scroll() {
    document.getElementById('scroll').scrollIntoView({behavior:'smooth'});
  }
  
function scrollPadding(id) {
  const padding = document.getElementById(id);

  if (itens_menu.classList.contains('show')) {
    padding.style.paddingTop = '50px';
    itens_menu.classList.toggle('show');
}else{
  padding.style.paddingTop = 0;
}
}
