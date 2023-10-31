const form = document.getElementById('formul');
const fragment = document.createDocumentFragment();

const div = document.createElement('div');

const parrafo1 = document.createElement('span');
parrafo1.textContent = 'Nombre:  ';
div.appendChild(parrafo1);

const input = document.createElement('input');
input.type = 'text';
div.appendChild(input);

const parrafo2 = document.createElement('span');
parrafo2.textContent = 'Apellidos:  ';
div.appendChild(parrafo2);

const input2 = document.createElement('input');
input2.type = 'text';
div.appendChild(input2);

const boton = document.createElement('button');
boton.textContent = 'Enviar datos';
boton.onclick = function() {
    enviar_datos(input.value, input2.value);
    return false;
};
div.appendChild(boton);

fragment.appendChild(div);

function enviar_datos(nombre, apellidos) {
    const mostrar = document.createElement('p');
    mostrar.textContent = 'Hola buenos dias ' + nombre + ', ' + apellidos + ', encantado de conocerte';
    form.appendChild(mostrar);
    return false;
}

form.appendChild(fragment);




