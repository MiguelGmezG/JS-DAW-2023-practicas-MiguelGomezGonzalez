const metodo = () => {
  var asignaturas = [
    "Desarrollo de Aplicaciones Web",
    12345678,
    "Administración de Sistemas Informáticos en Red",
    87654321,
    "Desarrollo de Aplicaciones Multiplataforma",
    12348765,
  ];
  return (
    asignaturas.find(
      (tipo, indice) => typeof tipo === "string" && indice === 0
    ) +
    ", " +
    asignaturas.find((el, idx) => typeof el === "number" && idx === 1)
  );
};
console.log(metodo());
