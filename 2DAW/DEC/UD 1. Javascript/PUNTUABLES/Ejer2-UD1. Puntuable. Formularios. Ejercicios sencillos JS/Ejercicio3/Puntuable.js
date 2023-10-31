function buscar() {
  cadena = window.prompt("Introduce una cadena de texto: ");
  contador = 0;
  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index] == "a" || cadena[index] == "A") {
      contador++;
    }
  }
  alert("La cadena:  " + cadena + "\nTiene " + contador + " letras a");
}
