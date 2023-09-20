const saludamos = (nombre) => {
  var horaCompleta = new Date().toLocaleTimeString(); 
  var horaDividida = horaCompleta.split(":");
  var hora = parseInt(horaDividida[0], 10);
  if ([7, 8, 9, 10, 11, 12, 13, 14].includes(hora)) {
    return "Buenos Dias " + nombre;
  }
  if ([15, 16, 17, 18, 19, 20, 21].includes(hora)) {
    return "Buenos Tardes " + nombre;
  }
  if ([22, 23, 24, 12, 1, 2, 3, 4, 5, 6].includes(hora)) {
    return "Buenos Noches " + nombre;
  }
};
console.log(saludamos("Miguel"));