class Alumno {
  constructor(matricula, nia, nombre, apellidos, curso, modulo) {
    this.matricula = matricula;
    this.nia = nia;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.curso = curso;
    this.modulo = modulo;
  }

  iniciar(datos) {
    const partes = datos.split(",");
    if (partes.length === 6) {
      this.matricula = partes[0].trim();
      this.nia = partes[1].trim();
      this.nombre = partes[2].trim();
      this.apellidos = partes[3].trim();
      this.curso = partes[4].trim();
      this.modulo = partes[5].trim();
    } else {
      console.log(
        "Has introducido mas valores de los necesarios\br Los valores necesarios son: matricula, nia, nombre, apellidos, curso, modulo"
      );
    }
  }

  mostrarDatos() {
    console.log(
      "\n Matrícula: " +
        this.matricula +
        "\n NIA: " +
        this.nia +
        "\n NCurso: " +
        this.curso +
        "\n Módulo: " +
        this.modulo
    );
  }
}

const alumno1 = new Alumno("", "", "", "", "", "");
const datosAlumno = "12345, 67890, Juan, Pérez, 1A, Informática";
alumno1.iniciar(datosAlumno);
alumno1.mostrarDatos();
const alumno2 = new Alumno(
  "123456",
  "78910",
  "Maria",
  "Gomez",
  "2B",
  "Matematica"
);
alumno2.mostrarDatos();
