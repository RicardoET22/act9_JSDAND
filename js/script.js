//cambiar fondo
let cabecera = document.getElementsByTagName("header");
function dark(){
  cabecera[0].style.backgroundColor = '#000';   
  cabecera[0].classList.remove('ligero'); 
  document.body.style.backgroundColor = "#000";
  document.getElementById("evento").innerHTML = "Cambiaste al tema oscuro";
} 
//light
document.getElementById('capa2').addEventListener('click',light);
function light(){
cabecera[0].style.backgroundColor = '#39ff85bd';
cabecera[0].classList.add('ligero');
document.body.style.backgroundColor = "#39ff85bd"
document.getElementById("evento").innerHTML = "Cambiaste al tema nature";
}
document.getElementById('capa3').addEventListener('click', function (){defaulte()})
let defaulte = function(){
cabecera[0].style.backgroundColor = 'transparent';
document.body.style.backgroundColor = "#d9edfaa0"
cabecera[0].classList.remove('dark');
document.getElementById("evento").innerHTML = "Cambiaste al tema default";
}
 

// Obtiene la ventana modal
var modal = document.getElementById("myModal");

// Obtiene el botón para abrir la ventana modal
var btn = document.getElementById("open-modal");

// Obtiene el botón para cerrar la ventana modal
var span = document.getElementsByClassName("close")[0];

// Cuando se haga clic en el botón, muestra la ventana modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando se haga clic en el botón de cerrar, oculta la ventana modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando se haga clic fuera de la ventana modal, también se oculta
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Activar la función al enviar el formulario
document.getElementById("myForm").addEventListener("submit", cambiarTarjeta);
function cambiarTarjeta(event) {
  event.preventDefault();
  var nombre = document.getElementById("nombreForm").value;
  var mensaje = document.getElementById("mensajeForm").value;
console.log(mensaje);
  document.getElementById("nombreT").innerHTML = nombre;
  document.getElementById("mensaje").innerHTML = mensaje;

  var modal = document.getElementById("myModal");
  modal.style.display = "none";

}

