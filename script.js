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
