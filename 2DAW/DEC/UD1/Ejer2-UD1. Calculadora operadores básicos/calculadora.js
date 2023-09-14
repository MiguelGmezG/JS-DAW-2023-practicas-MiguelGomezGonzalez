function calculadora() {
  var operacion = prompt(
    "Introduce el simbolo de la operacion que vamos a asignar: -+/*"
  );
  numero1 = parseInt(prompt("Introduce el primer valor a sumar: "));
  numero2 = parseInt(prompt("Introduce el segundo valor a sumar: "));
  let resultado;
  if (operacion === "*") {
    resultado = numero1 * numero2;
  } else {
    if (operacion === "/") {
      resultado = numero1 / numero2;
    } else {
      if (operacion === "-") {
        resultado = numero1 - numero2;
      } else {
        if (operacion === "+") {
          resultado = numero1 + numero2;
        } else {
          document.write(
            "La operacion no se puede realizar porque el simbolo de la operacion no es valido"
          );
          return;
        }
      }
    }
  }
  alert("El resultado es: " + resultado);
  document.write(numero1 + operacion + numero2 + " = " + resultado);
  return;
}