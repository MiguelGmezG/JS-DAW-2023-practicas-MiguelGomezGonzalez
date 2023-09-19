const caracteres = ['a', 'b', 'c', 'd', 'e', 'fffff'];
const estaEnArray = caracteres.includes("c");
console.log(`¿La letra c está en el array?` +estaEnArray);
const elementoMenosDe5 = caracteres.find(elemento => elemento.length < 5);
console.log(`Primera letra con menos de 5 caracteres:` +elementoMenosDe5);
const posicionElemento = caracteres.indexOf('e');
console.log(`La posición de 'e' en el array es: `+posicionElemento);
const elementosLongitud5 = caracteres.filter(elemento => elemento.length === 5);
console.log(`Letra con longitud de 5 caracteres: ` +elementosLongitud5);