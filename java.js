
//Menu de navegacion

var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true
    }
    else{menu.style.display = "none";
    menu_visible = false;
    }
}

//Ocultar el menu una vez que se selecciona la opción

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false
    }
}

//Crear las barras de una barra particular identificada por su id

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div =document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Seleccionar todas las barras generales para poder despues modificarlas

let video = document.getElementById("video");
crearBarra(video);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let cm = document.getElementById("cm");
crearBarra(cm);
let office = document.getElementById("office");
crearBarra(office);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);
let html = document.getElementById("html");
crearBarra(html);

//Guardar la cantidad de barras que se van a ir pintando
//Cada posicion pertenece a un elemento
//Comienzan todas en -1 porque no tienen ninguna celda pintada al iniciar (para generar una animación)
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable se va a utilizar como bandera para saber si se ejecutó la animación
let entro = false;

//Configuración de la funcion que aplica las animaciones
function efectoHabilidades() {
var habilidades = document.getElementById("habilidades");
var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalVideo = setInterval(function() {
      PintarBarra(video, 16, 0, intervalVideo);
    }, 100);

    const intervalPhotoshop = setInterval(function() {
        PintarBarra(photoshop, 16, 1, intervalPhotoshop);
      }, 100);

      const intervalCm = setInterval(function() {
        PintarBarra(cm, 16, 2, intervalCm);
      }, 100);

      const intervalOffice = setInterval(function() {
        PintarBarra(office, 14, 3, intervalOffice);
      }, 100);

      const intervalIlustrator = setInterval(function() {
        PintarBarra(ilustrator, 9, 4, intervalIlustrator);
      }, 100);

      const intervalHtml = setInterval(function() {
        PintarBarra(html, 6, 5, intervalHtml);
      }, 100);

  }
}

//Llenar una barra particular con la cantidad indicada
function PintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#000";
  } else {
    clearInterval(interval);
  }
}

//Detectar el scroll del mouse para activar la animación
window.onscroll = function() {
  efectoHabilidades();
}
