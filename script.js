// despliegue de menu 

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    document.querySelector(".menu__conteiner").classList.toggle("mostrar_menu");
}
 
// ocultar y mostrar barra de navegacion cuando hacemos scroll

let ubicacionPrincipal = window.pageYOffset
let $nav = document.querySelector("#nav")

window.addEventListener("scroll", function() {
  let ubicacionActual = window.pageYOffset

  console.log(ubicacionActual)

  if (ubicacionPrincipal >= ubicacionActual) {
    $nav.style.top = "0px";
     } else { 
      $nav.style.top = "-80px"
  }
  ubicacionPrincipal = ubicacionActual
})