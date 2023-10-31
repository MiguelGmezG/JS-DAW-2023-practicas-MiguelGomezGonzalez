function cualMayor() {
  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);
  const numero3 = parseFloat(document.getElementById("numero3").value);
  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Por favor, ingrese tres números válidos.");
  } else {
    let mensaje = "";
    if (numero1 > numero2 && numero1 > numero3) {
      mensaje = "El numero mayor es " + numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
      mensaje = "El numero mayor es " + numero2;
    } else if (numero3 > numero1 && numero3 > numero2) {
      mensaje = "El numero mayor es " + numero3;
    } else {
      mensaje = "Los números son iguales.";
    }
    alert(mensaje);
  }
}
