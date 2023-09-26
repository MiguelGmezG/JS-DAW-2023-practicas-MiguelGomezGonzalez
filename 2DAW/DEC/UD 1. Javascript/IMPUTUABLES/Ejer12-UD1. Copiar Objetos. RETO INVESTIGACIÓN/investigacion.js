let persona = { nombre: "NombreInventado", profesion: "Informático DAW" };

let antonioObj = { ...persona };

antonioObj.nombre = "Pepito";
antonioObj.edad = "55";

console.log(antonioObj.nombre);
console.log(persona.nombre);

console.log(antonioObj.profesion);
console.log(persona.profesion);

//¿Que esta pasando?
//Se crea una copia superficial de persona en antonioObj, entonces los cambios producidos en dicha copia no se veran reflejados en la variable persona.
