function fondo() {
  color = window.prompt("¿Que color de fondo deseas?\n(R rojo, V verde o A azul)");
  if (color=="R"||color=="r") {
    document.body.style.backgroundColor = "#ff0000";
  }
  if (color=="V"||color=="v") {
    document.body.style.backgroundColor = "#008f39";
  }
  if (color=="A"||color=="a") {
    document.body.style.backgroundColor = "#0000ff";
  }
}
