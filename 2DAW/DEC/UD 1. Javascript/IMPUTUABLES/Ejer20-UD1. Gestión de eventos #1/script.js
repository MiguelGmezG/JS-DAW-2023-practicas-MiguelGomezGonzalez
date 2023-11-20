let cambioFondoContador = 0;

document.addEventListener('keydown', function (event) {
    if (event.altKey && event.code === 'F12') {
        cambiarFondo();
    }
});

function cambiarFondo() {
    const imagenDiv = document.getElementById('imagen');
    const nuevaImagenURL = `https://source.unsplash.com/random?${cambioFondoContador++}`;
    imagenDiv.style.backgroundImage = `url(${nuevaImagenURL})`;
}
