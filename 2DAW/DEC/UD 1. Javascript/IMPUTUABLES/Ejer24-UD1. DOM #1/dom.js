const form = document.getElementById('formul');

const fragment = document.createDocumentFragment();

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Parrafo 1 realizado desde JS';
fragment.appendChild(parrafo1);
const parrafo2 = parrafo1.cloneNode(true);
parrafo2.textContent = 'Parrafo 2 realizado desde JS';
fragment.appendChild(parrafo2);

const enlace = document.createElement('a');
enlace.href = " https://github.com/MiguelGmezG/JS-DAW-2023-practicas-MiguelGomezGonzalez.git";
enlace.textContent = 'Ven a mi repositorio';
fragment.appendChild(enlace);

const lista = document.createElement('ul');
for (let index = 0; index < 5; index++) {
    const item = document.createElement('li');
    item.textContent = `elemento de la lista: ${index+1}`;
    lista.appendChild(item);    
}
fragment.appendChild(lista);

const selector = document.createElement('select');
selector.name = 'numero';
const opciones1 = document.createElement('option');
const opciones2 = document.createElement('option');
const opciones3 = document.createElement('option');
opciones1.textContent = 'Eligue esta';
opciones2.textContent = 'Esta no';
opciones3.textContent = 'Esta no me gusta';
opciones1.value = '1';
opciones2.value = '2';
opciones3.value = '3';
selector.appendChild(opciones1);
selector.appendChild(opciones2);
selector.appendChild(opciones3);
fragment.appendChild(selector);

const div = document.createElement('div');
const input = document.createElement('input');
input.type = 'text';
div.appendChild(input);
fragment.appendChild(div);

form.appendChild(fragment);
