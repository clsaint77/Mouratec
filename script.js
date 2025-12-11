/* -------------------------
const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");


function mostrarModal() {
  modal.style.left = "50%";
  mascara.style.visibility = "visible";
}

function fecharModal() {
  modal.style.left = "-50%";
  mascara.style.visibility = "hidden";
}
------------------------- */

// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      window.scrollTo({
        top: alvo.offsetTop - 80, // ajusta por causa do header fixo
        behavior: 'smooth'
      });
    }
  });
});


// MENU MOBILE
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
  toggleBtn.classList.toggle('active');
  document.body.classList.toggle('menu-aberto');
});

// Fecha o menu ao clicar em um item
document.querySelectorAll('.dropdown_menu a').forEach(link => {
  link.addEventListener('click', () => {
    dropdownMenu.classList.remove('open');
    toggleBtn.classList.remove('active');
    document.body.classList.remove('menu-aberto');
  });
});




// RODAPÉ QUE APARECE NO FINAL DA PÁGINA
window.addEventListener("scroll", () => {
    const footer = document.getElementById("footerFinal");

    const scrollPos = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    // Quando chegar ao final, exibe o rodapé
    if (scrollPos >= pageHeight - 10) {
        footer.style.opacity = "1";
        footer.style.transform = "translateY(0)";
    } else {
        footer.style.opacity = "0";
        footer.style.transform = "translateY(100%)";
    }
});
