function cambiarImagen() {
  const body = document.body;
  fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(data => {
      const nuevaImagenURL = data.image;
      body.style.backgroundImage = `url('${nuevaImagenURL}')`;
    })
    .catch(error => {
      console.error('Error al obtener la imagen:', error);
    });
    
}

function quedice() {
    fetch('https://yesno.wtf/api')
    .then(response => response.text())
    .then(data => {
      const pregunta = data.answer;
    })
    .catch(error => {
      console.error('Error al obtener la respuesta:', error);
    }); 
    if (pregunta=="yes") {
        return "YESSSSSSSSSSSSSS!!";
    }if (pregunta=="no") {
        return "NOOOOOOOOOO!!!!!";
    }
}