const boton = document.getElementById("guardarJugador");
const input = document.getElementById("nombre");
const lista = document.getElementById("listaJugadores");
const selectColor = document.getElementById("fichas");

boton.textContent = "Registrar jugador";

// Cargar jugadores guardados al iniciar
window.addEventListener("load", () => {
  const jugadoresGuardados = JSON.parse(localStorage.getItem("jugadores")) || [];
  jugadoresGuardados.forEach(jugador => mostrarJugador(jugador));
});

boton.addEventListener("click", () => {
  const nombre = input.value.trim();
  const color = selectColor.value;

  if (nombre === "") {
    alert("Por favor ingresa un nombre.");
    return;
  }

  const jugador = { nombre, color };

  // Guardar en localStorage
  let jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];
  jugadores.push(jugador);
  localStorage.setItem("jugadores", JSON.stringify(jugadores));

  // Mostrar en la lista
  mostrarJugador(jugador);

  // Limpiar campo
  input.value = "";
});

// Función para mostrar el jugador en la lista
function mostrarJugador(jugador) {
  const li = document.createElement("li");
  li.textContent = `${jugador.nombre} - Color: ${jugador.color}`;
  lista.appendChild(li);
}
const tablero = document.querySelector('.tablero');

for (let i = 0; i < 64; i++) {
  const casilla = document.createElement('div');
  casilla.classList.add('casilla');
  tablero.appendChild(casilla);
}
const piezas = [
  "torre_negra","caballo_negro","alfin_negro","reina_negra","rey_negro","alfin_negro","caballo_negro","torre_negra","peon_negro","peon_negro","peon_negro","peon_negro","peon_negro","peon_negro","peon_negro","peon_negro",

  ...Array(32).fill(""),

   "peon_blanco","peon_blanco","peon_blanco","peon_blanco","peon_blanco","peon_blanco","peon_blanco","peon_blanco","torre_blanca","caballo_blanco","alfin_blanco","reina_blanca","rey_blanco","alfin_blanco","caballo_blanco","torre_blanca"
];
const casilla = document.querySelectorAll('.casilla');
piezas.forEach ((pieza, i) => {
  if (pieza !==""){
    const img =document.createElement('img');
    img.src=`imagenes/${pieza}.png`;
    casilla[i].appendChild(img);
  }
});
const botonLimpiar =document.getElementById("limpiar");
boronlimpiar.addEventListener("click",()=>{
  localStorage.removeItem("jugadores");
  lista.innerHTML="";
  console.info("Nuevo Jugador");
});
 
