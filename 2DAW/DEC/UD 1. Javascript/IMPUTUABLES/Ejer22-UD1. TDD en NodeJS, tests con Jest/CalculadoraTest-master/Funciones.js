// Funciones.js

function sumar(numero1, numero2) {
    var resultado;
    resultado = numero1 + numero2;
    return resultado;
}

function resta(numero1, numero2) {
    var resultado;
    resultado = numero1 - numero2;
    return resultado;
}

function mult(numero1, numero2) {
    var resultado;
    resultado = numero1 * numero2;
    return resultado;
}

function div(numero1, numero2) {
    var resultado;
    resultado = numero1 / numero2;

    if (numero2 === 0) {
        throw "Cannot divide by 0!";
    }

    return resultado;
}

module.exports = {
    sumar,
    resta,
    mult,
    div
};
