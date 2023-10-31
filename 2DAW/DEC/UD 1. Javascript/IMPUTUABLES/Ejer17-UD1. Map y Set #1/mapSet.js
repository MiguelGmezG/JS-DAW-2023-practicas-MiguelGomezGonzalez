var modulos = new Map();
modulos.set("DEC", "Desarrollamiento WEB en entorno cliente");
modulos.set("DWS", "Desarrollamiento WEB en entorno servidor");
modulos.set("DAW", "Desplegamiento de aplicaciones WEB");
modulos.set("DIW", "Diseño de interfaces WEB");

for (nombre of modulos.values()) {
  nombreModulo += nombre + "\n";
}
texto = "La cantidad total de módulos: " + modulos.size + "\n\n";
modulos.forEach((value, key) => {
  texto +=
    "La abreviatura es " +
    `${key}` +
    " y su nombre completo es " +
    `${value}` +
    "\n";
});
texto += "\n\nLas abreviaturas son:\n";
for (clave of modulos.keys()) {
  texto += clave + "\n";
}
texto += "\nLos nombres completos de los modulos son: \n";
for (nombre of modulos.values()) {
  texto += nombre + "\n";
}
texto +=
  "\n\n¿Esta el modulo DAW entre los modulos de 2 de DAW? --> " +
  modulos.has("DAW") +
  "\n¿Esta el modulo GBD entre los modulos? --> " +
  modulos.has("GBD") +
  "\n\n";
modulos.forEach((value, key) => {
  texto += "La clave --> " + `${key}` + " y su valor --> " + `${value}` + "\n";
});
console.log(texto);
