function anade() {
  var elemento = document.createElement("li");
  var texto = document.createTextNode("+1");
  elemento.appendChild(texto);

  var lista = document.getElementById("lista");
  lista.appendChild(elemento);

  var nuevoElemento = "<li>Holaa, uno mas</li>";
  lista.innerHTML = lista.innerHTML + nuevoElemento;
}
