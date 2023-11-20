let dragging = false;

document.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('draggable')) {
        dragging = true;
        e.target.classList.add('dragging');
    }
});

document.addEventListener('mousemove', function (e) {
    if (dragging) {
        const draggedElement = document.querySelector('.dragging');
        draggedElement.style.left = e.clientX - draggedElement.offsetWidth / 2 + 'px';
        draggedElement.style.top = e.clientY - draggedElement.offsetHeight / 2 + 'px';

        const droppableElement = document.getElementById('capa2');
        const rect1 = draggedElement.getBoundingClientRect();
        const rect2 = droppableElement.getBoundingClientRect();

        if (
            rect1.left < rect2.left + rect2.width &&
            rect1.left + rect1.width > rect2.left &&
            rect1.top < rect2.top + rect2.height &&
            rect1.top + rect1.height > rect2.top
        ) {
            droppableElement.classList.add('dropping');
        } else {
            droppableElement.classList.remove('dropping');
        }
    }
});

document.addEventListener('mouseup', function () {
    if (dragging) {
        const draggedElement = document.querySelector('.dragging');
        const droppableElement = document.getElementById('capa2');

        const rect1 = draggedElement.getBoundingClientRect();
        const rect2 = droppableElement.getBoundingClientRect();

        if (
            rect1.left < rect2.left + rect2.width &&
            rect1.left + rect1.width > rect2.left &&
            rect1.top < rect2.top + rect2.height &&
            rect1.top + rect1.height > rect2.top
        ) {
            draggedElement.style.display = 'none';
            droppableElement.textContent = 'LO HAS LOGRADO';
        }

        draggedElement.classList.remove('dragging');
        dragging = false;
    }
});
