var userData = {
  name: document.getElementById("nombre").value,
  email: document.getElementById("email").value,
  password: document.getElementById("password").value
};

// Crea una nueva instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();

// Configura la solicitud
xhr.open("POST", "http://localhost:8000/api/user/", true);
xhr.setRequestHeader("Content-Type", "application/json");

// Maneja el evento de carga de la solicitud
xhr.onload = function () {
  if (xhr.status === 200) {
      // Éxito, maneja la respuesta según sea necesario
      var data = JSON.parse(xhr.responseText);
      console.log("Respuesta del servidor:", data);
  } else {
      // Error en la solicitud
      console.error("Error al realizar la solicitud:", xhr.statusText);
  }
};

// Maneja el evento de error de la solicitud
xhr.onerror = function () {
  console.error("Error de red al intentar realizar la solicitud.");
};

// Convierte el objeto userData a una cadena JSON y envíalo en el cuerpo de la solicitud
var jsonData = JSON.stringify(userData);
xhr.send(jsonData);
