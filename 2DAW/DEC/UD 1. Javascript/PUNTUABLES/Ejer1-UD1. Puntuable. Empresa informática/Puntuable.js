var EMPLEADO = [["", "Informatico"]];
var indiceE = 0;
var DIRECTOR = [[EMPLEADO[1], [[]]]];
var indiceD = 0;
var indiceDI=0;
var TRABAJADOR = [EMPLEADO[1], [""]];
var indiceT = 0;
var INGENIERO = [[TRABAJADOR[1], ""], "Ingeniería"];
var indiceI = 0;
var indiceIP=0;

function añadirEmpleado(nombre) {
  EMPLEADO[indiceE[(nombre, "Informatico")]];
  indiceE++;
}
function añadirDirector(nombreEmpleado) {
  DIRECTOR[indiceD[(EMPLEADO[EMPLEADO.indexOf(nombreEmpleado)], [""])]];

  indiceD++;
}
function añadirTrabajador(nombreEmpleado) {
  TRABAJADOR[indiceT[(EMPLEADO[EMPLEADO.indexOf(nombreEmpleado)], [""])]];
  indiceT++;
}
function añadirIngeniero(nombreIngeniero) {
  INGENIERO[
    indiceI[(TRABAJADOR[TRABAJADOR.indexOf(nombreIngeniero)], "Ingenieria")]
  ];
  indiceI++;
}
function AñadirInforme(nombreDirector, informe) {
    DIRECTOR[DIRECTOR.indexOf(nombreDirector)[nombreDirector,[indiceDI[informe]]]]
    indiceDI++;
}
function AñadirProyecto(nombreTrabajador, proyecto) {
    TRABAJADOR [TRABAJADOR .indexOf(nombreTrabajador)[nombreTrabajador,[indiceIP[proyecto]]]]
    indiceIP++;
}
function AñadirLenguaje(nombreingeniero, lenguaje) {
    DIRECTOR[DIRECTOR.indexOf(nombreingeniero)[nombreingeniero,lenguaje]]
    indiceIP++;
}
function mostrarEmpresa() {
  var cadena =
    "-------------------------EMPRESA INFORMATICA-----------------------------\n";
    for (let index = 0; index < DIRECTOR.length; index++) {
        cadena += "Director --> "+DIRECTOR[index]+"\n";
    }
    for (let index = 0; index < EMPLEADO.length; index++) {
        cadena += "Empleados --> "+EMPLEADO[index]+"\n";
    }
    for (let index = 0; index < TRABAJADOR.length; index++) {
        cadena += "TRABAJADOR --> "+TRABAJADOR[index]+"\n";
    }
    for (let index = 0; index < INGENIERO.length; index++) {
        cadena += "INGENIERO --> "+INGENIERO[index]+"\n";
    }
    return cadena;
}

console.log(añadirEmpleado("Miguel Gomez Gonzalez"));
console.log(añadirEmpleado("Miguel  Gonzalez"));
console.log(añadirEmpleado("Miguel "));
console.log(añadirDirector("Miguel Gomez Gonzalez"))
console.log(añadirTrabajador("Miguel Gomez Gonzalez"))
console.log(añadirIngeniero("Miguel Gomez Gonzalez"))
console.log(AñadirInforme("Miguel Gomez Gonzalez","holaaaaaaaaaaaa"))
console.log(AñadirInforme("Miguel Gomez Gonzalez","holaaaaaaaaaaaa"))
console.log(AñadirProyecto("Miguel Gomez Gonzalez","holaaaaaaaaaaaa"))
console.log(AñadirProyecto("Miguel Gomez Gonzalez","holaaaaaaaaaaaa"))
console.log(AñadirProyecto("Miguel Gomez Gonzalez","holaaaaaaaaaaaa"))
console.log(AñadirLenguaje("Miguel Gomez Gonzalez","Java"))
console.log(mostrarEmpresa())




