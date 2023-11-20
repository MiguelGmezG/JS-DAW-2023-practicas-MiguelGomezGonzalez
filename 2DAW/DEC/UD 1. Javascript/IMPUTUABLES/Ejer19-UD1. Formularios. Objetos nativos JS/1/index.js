var fechaNacimiento = prompt("¿En qué día naciste? (Formato: YYYY/MM/DD)");

// Convertir la cadena de fecha de nacimiento a un objeto Date
var fechaNacimientoObj = new Date(fechaNacimiento);

// Obtener la fecha actual
var fechaActual = new Date();

// Calcular la diferencia en milisegundos
var diferenciaEnMilisegundos = fechaActual - fechaNacimientoObj;

// Convertir la diferencia de milisegundos a días
var diferenciaEnDias = Math.floor(
  diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
);

// Mostrar la diferencia en días en una alerta
alert(
  "La diferencia entre tu fecha de nacimiento y la fecha actual es de " +
    diferenciaEnDias +
    " días."
);
