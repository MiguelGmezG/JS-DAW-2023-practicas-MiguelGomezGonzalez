const finda = (findas, mayorDe) => {
    return findas.find(elemento => elemento > mayorDe);

}
console.log("El numero mayor a 50 es "+finda([23, 30, 8, 55, 79],50));
console.log("El numero mayor a 50 es "+finda([23, 30, 8, 0, 10],50));
