class AlumnoDaw {
  constructor(nombre, apellido, email, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._email = email;
    this._edad = edad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(nuevoApellido) {
    this._apellido = nuevoApellido;
  }

  get email() {
    return this._email;
  }

  set email(nuevoEmail) {
    this._email = nuevoEmail;
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad >= 0) {
      this._edad = nuevaEdad;
    } else {
      console.log("La edad no puede ser un valor negativo.");
    }
  }
}

const alumno = new AlumnoDaw("Manolo", "Gomez", "manolo@afasdfa.com", 45);

console.log("Nombre:", alumno.nombre);
console.log("Apellido:", alumno.apellido);
console.log("Email:", alumno.email);
console.log("Edad:", alumno.edad);

alumno.nombre = "Luis";
alumno.apellido = "Gómez";
alumno.email = "luis@agdadsga.com";
alumno.edad = 30;

console.log("Nombre modificado:", alumno.nombre);
console.log("Apellido modificado:", alumno.apellido);
console.log("Email modificado:", alumno.email);
console.log("Edad modificado:", alumno.edad);
