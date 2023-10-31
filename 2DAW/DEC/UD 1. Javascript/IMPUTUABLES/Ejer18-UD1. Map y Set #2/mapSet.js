const modulos = new Set();

function agregarModulo(abreviatura, duracion, alumnosMatriculados) {
  const modulo = {
    abreviatura,
    duracion,
    alumnosMatriculados,
  };
  modulos.add(modulo);
}

agregarModulo("DEC", "3 meses", 50);
agregarModulo("DWS", "4 meses", 60);
agregarModulo("DAW", "5 meses", 70);
agregarModulo("DIW", "3 meses", 55);

modulos.forEach((modulo) => {
  console.log(
    "Abreviatura:" +
      modulo.abreviatura +
      "\nDuración:" +
      modulo.duracion +
      "\nAlumnos Matriculados:" +
      modulo.alumnosMatriculados
  );
});
