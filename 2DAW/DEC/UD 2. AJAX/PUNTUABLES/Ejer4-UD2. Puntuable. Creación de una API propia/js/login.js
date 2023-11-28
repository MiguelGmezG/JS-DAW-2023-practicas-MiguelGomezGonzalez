document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Realiza una solicitud HTTP para autenticar al usuario utilizando los datos ingresados
  fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
})
.then(response => response.json())
.then(data => {
    console.log("Respuesta del servidor:", data);
    alert("Bienvenido");
})
.catch(error => {
    console.error("Error al realizar la solicitud:", error);
    alert("Adiós intruso");
});


});
