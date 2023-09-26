// PADRE
class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log("Hola, soy " + this.nombre);
  }

  login(email, password) {}
}

class AlumnoDaw extends Usuario {
  constructor(nombre, email, password) {
    super(nombre, email, password);
    this.cursos = [];
    this.activo = false;
  }

  activar() {
    this.activo = true;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log(
        "True at usuarioDAW.login(`" + email + "`, `" + password + "`)"
      );
    } else {
      console.log(
        "False at usuarioDAW.login(`" + email + "`, `" + password + "`)"
      );
    }
  }

  AgregarCurso(curso) {
    this.cursos.push(curso);
  }
}

class AlumnoASIR extends AlumnoDaw {
  constructor(nombre, email, password) {
    super(nombre, email, password);
    this.cursos = [];
    this.activo = false;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log(
        "True at usuarioASIR.login(`" + email + "`, `" + password + "`)"
      );
    } else {
      console.log(
        "False at usuarioASIR.login(`" + email + "`, `" + password + "`)"
      );
    }
  }
}

// Probamos
const alumnodaww = new AlumnoDaw(
  "Miguel",
  "miguelgomez@gmail.com",
  "123456789"
);
alumnodaww.saludo();
alumnodaww.activar();
alumnodaww.AgregarCurso("SMX");
alumnodaww.login("miguelgomez@gmail.com", "123456789");
alumnodaww.login("junitoplantounclavito@gmail.com", "123456789");

const alumnoasirr = new AlumnoASIR(
  "Juan",
  "junitoplantounclavito@gmail.com",
  "123456789"
);
alumnoasirr.saludo();
alumnoasirr.activar();
alumnoasirr.AgregarCurso("ASIR");
alumnoasirr.login("junitoplantounclavito@gmail.com", "123456789");
alumnoasirr.login("miguelgomez@gmail.com", "123456789");
