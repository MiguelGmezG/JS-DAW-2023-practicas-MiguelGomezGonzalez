document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Aquí puedes realizar una solicitud HTTP para registrar al usuario utilizando los datos ingresados.
  // Ejemplo: fetch('/api/user', { method: 'POST', body: JSON.stringify({ name, email, password }), headers: { 'Content-Type': 'application/json' }})
  // Después de la solicitud, puedes manejar la respuesta según sea necesario.

  // Ejemplo de consola para demostración:
  console.log("Datos de registro:", { name, email, password });
});
