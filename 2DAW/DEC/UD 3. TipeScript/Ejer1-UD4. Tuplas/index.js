/**
 * 1. Representar una tupla en TS que indique el nombre abreviado del módulo cursado, las horas y el número de alumnos.
 */
var modulo1 = ["DAW", 150, 12];
var modulo2 = ["ASIR", 360, 12];
/**
 * 2. Añade a cada una de las tuplas creadas anteriormente el nombre profesor que imparte la asignatura. Lo agregaremos mediante push():
 */
modulo1.push("Toni");
modulo2.push("Marcos");
/**
 * 3. Accede al primer elemento de la tupla mediante su índice.
 */
console.log(modulo1[0]);
console.log(modulo2[0]);
/**
 * 4. Comprueba si aparece mediante su índice el nombre del profesor creado en el paso 2.
 */
var indiceProfesor1 = modulo1.indexOf("Toni");
var indiceProfesor2 = modulo2.indexOf("Marcos");
if (indiceProfesor1 !== -1) {
    console.log("Índice del Profesor1:", indiceProfesor1);
}
else {
    console.log("Profesor1 no encontrado en Modulo1");
}
if (indiceProfesor2 !== -1) {
    console.log("Índice del Profesor2:", indiceProfesor2);
}
else {
    console.log("Profesor2 no encontrado en Modulo2");
}
