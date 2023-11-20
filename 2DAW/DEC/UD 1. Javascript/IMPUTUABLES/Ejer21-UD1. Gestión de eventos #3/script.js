document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    emailInput.addEventListener('blur', validarEmail);
    passwordInput.addEventListener('blur', validarPassword);

    function validarEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value)) {
            mostrarError('Formato de correo electrónico no válido');
        } else {
            ocultarError();
        }
    }

    function validarPassword() {
        const passwordRegex = /^.{8,10}$/;

        if (!passwordRegex.test(passwordInput.value)) {
            mostrarError('La contraseña debe tener entre 8 y 10 caracteres');
        } else {
            ocultarError();
        }
    }

    function mostrarError(mensaje) {
        errorMessage.textContent = mensaje;
        errorMessage.style.display = 'block';
    }

    function ocultarError() {
        errorMessage.style.display = 'none';
    }
});

function enviarFormulario() {
    // Puedes realizar acciones adicionales al enviar el formulario
    alert('Formulario enviado correctamente');
}
