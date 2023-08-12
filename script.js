function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
     if (document.body.style.overflow === 'hidden') {
        enableScrollbar();
    } else {
        disableScrollbar();
    }
  }

  function enableScrollbar() {
    document.body.style.overflow = 'auto';
}

// Función para deshabilitar la barra de desplazamiento
function disableScrollbar() {
    document.body.style.overflow = 'hidden';
}


function redirectToPageProgects() {
    // Cambiar "otra_pagina.html" por la URL de la página a la que quieres redireccionar
    window.location.href = "ProgectsVetha.html";
  }

function redirectToPageMenu() {
  // Cambiar "otra_pagina.html" por la URL de la página a la que quieres redireccionar
  window.location.href = "Vetha_web.html";
}

function adjustElementPosition() {
  const element = document.getElementById('sidebar');
  const scrollY = window.scrollY; // Obtenemos el valor de desplazamiento vertical

  // Ajustamos la posición del elemento en función del valor del desplazamiento
  element.style.top =scrollY + 'px';
}

window.addEventListener('scroll', adjustElementPosition);

function adjustBMenuPosition() {
  const element = document.getElementById('toggleButton');
  const scrollY = window.scrollY; // Obtenemos el valor de desplazamiento vertical

  // Ajustamos la posición del elemento en función del valor del desplazamiento
  if (scrollY > 100) {
    element.style.top =scrollY + 'px';
  } else {
    element.style.top = 0 + 'px';
  }
}

window.addEventListener('scroll', adjustBMenuPosition);