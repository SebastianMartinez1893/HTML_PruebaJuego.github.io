function jugar(eleccionUsuario) {
  let opciones = ["piedra", "papel", "tijeras"];
  let eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
  if (eleccionUsuario === eleccionMaquina) {
    console.log("Empate. Ambos eligieron " + eleccionUsuario + ".");
  } else if (
    (eleccionUsuario === "piedra" && eleccionMaquina === "tijeras") ||
    (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
    (eleccionUsuario === "tijeras" && eleccionMaquina === "papel")
  ) 
  {
    document.getElementById("lblResultado").textContent="¡Ganaste! Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + "."
  } else
  {
    document.getElementById("lblResultado").textContent="Perdiste. Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + "."
  }
}

let max = 100;
let min = 1;
let numeroAleatorio = Math.random() * (max - min) + min;
numeroAleatorio = parseInt(numeroAleatorio);

function adivinar() {
  let usuario = document.getElementById("txtNumero").value;

  if (usuario > numeroAleatorio) {
    document.getElementById("lblResCal").textContent = `el numero es menor`;

  } else if (usuario < numeroAleatorio) {
    document.getElementById("lblResCal").textContent = `el numero es mayor`;
  } else {
    document.getElementById("lblResCal").textContent = `!!! Ganaste !!!, el número era ${numeroAleatorio}`;
  }
}

