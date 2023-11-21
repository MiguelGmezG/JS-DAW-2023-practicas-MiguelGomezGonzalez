function Empleado(nombre) {
  this.nombre = nombre || "";
  this.departamento = "Informático";
}
module.exports = Empleado;

function Director(nombre) {
  Empleado.call(this, nombre);
  this.informes = [];
}
Director.prototype = new Empleado();
Director.prototype.constructor = Director;
function Trabajador(nombre) {
  Empleado.call(this, nombre);
  this.proyectos = [];
}
Trabajador.prototype = new Empleado();
Trabajador.prototype.constructor = Trabajador;
function Ingeniero(nombre) {
  Trabajador.call(this, nombre);

  this.LenguajeProgramacion = "";
  this.departamento = "Ingeniería";
}
Ingeniero.prototype = new Trabajador();
Ingeniero.prototype.constructor = Ingeniero;
var director1 = new Director("Pepito");
var director2 = new Director("Manolo");
var director3 = new Director("Juan");
director2.informes.push("Informe del director1.");
director2.informes.push("Informe del director2.");
director2.informes.push("Informe del director3.");
director3.informes.push("Informe del director4.");
var ingeniero1 = new Ingeniero("Maria");
var ingeniero2 = new Ingeniero("Pepa");
var ingeniero3 = new Ingeniero("Denise");
var ingeniero4 = new Ingeniero("Javier");
ingeniero1.LenguajeProgramacion = "C++";
ingeniero2.LenguajeProgramacion = "Java";
ingeniero3.LenguajeProgramacion = "JavaScript";
ingeniero4.LenguajeProgramacion = "HTML";
var directores = [director1, director2, director3];
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
