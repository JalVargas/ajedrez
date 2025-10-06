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