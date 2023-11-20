function convertirCadena() {
    var entradaText = document.getElementById("entradaText").value;
    var inversaText = entradaText.split('').reverse().join('');
    var mayusculasText = entradaText.toUpperCase();
    var repetidaText = entradaText.repeat(2);
    var invertidaMayusText = entradaText.split('').reverse().join('').toUpperCase();
    document.getElementById("inversaText").value = inversaText;
    document.getElementById("mayusculasText").value = mayusculasText;
    document.getElementById("repetidaText").value = repetidaText;
    document.getElementById("invertidaMayusText").value = invertidaMayusText;
}