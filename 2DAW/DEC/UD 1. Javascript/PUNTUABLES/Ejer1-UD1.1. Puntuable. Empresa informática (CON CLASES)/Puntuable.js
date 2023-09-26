class Empleado {
  constructor(nombre = "") {
    this.nombre = nombre;
    this.departamento = "Informático";
  }
}
class Director extends Empleado {
  constructor(nombre) {
    super(nombre);
    this.informes = [];
  }
}
class Trabajador extends Empleado {
  constructor(nombre) {
    super(nombre);
    this.proyectos = [];
  }
}
class Ingeniero extends Trabajador {
  constructor(nombre) {
    super(nombre);
    this.LenguajeProgramacion = "";
    this.departamento = "Ingeniería";
  }
}
const director1 = new Director("Pepito");
const director2 = new Director("Juan");
const director3 = new Director("Marta");
director2.informes.push("Informe del director1.");
director2.informes.push("Informe del director2.");
director2.informes.push("Informe del director3.");
director3.informes.push("Informe del director4.");

const ingeniero1 = new Ingeniero("Denise");
const ingeniero2 = new Ingeniero("Pablo");
const ingeniero3 = new Ingeniero("Paco");
const ingeniero4 = new Ingeniero("Paca");
ingeniero1.LenguajeProgramacion = "C++";
ingeniero2.LenguajeProgramacion = "Java";
ingeniero3.LenguajeProgramacion = "JavaScript";
ingeniero4.LenguajeProgramacion = "HTML";

const directores = [director1, director2, director3];
document.write(
  "<br /><br />--------------********* NOMBRES DIRECTORES *********-------------"
);
for (x of directores) {
  document.write("<br />Director → " + x.nombre);
  if (x.informes.length > 0) {
    document.write(
      "<br />--------------********* INFORMES de: " + x.nombre + " :"
    );
    for (y of x.informes) {
      document.write("<br />------------------------------********* " + y);
    }
  }
}
var ingenieros = [ingeniero1, ingeniero2, ingeniero3, ingeniero4];
document.write(
  "<br /><br />--------------********* INGENIEROS *********-------------"
);
for (let x of ingenieros) {
  document.write(
    "<br />----------------------------********* El ingeniero " +
      x.nombre +
      " usa el lenguaje de programación " +
      x.LenguajeProgramacion +
      " en el departamento " +
      x.departamento
  );
}
