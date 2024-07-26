//your code here
// Select all draggable elements and the parent container
const draggables = document.querySelectorAll('.image');
const container = document.getElementById('parent');

// Add event listeners to each draggable element
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', handleDragStart);
    draggable.addEventListener('dragover', handleDragOver);
    draggable.addEventListener('drop', handleDrop);
    draggable.addEventListener('dragend', handleDragEnd);
});

let draggedElement = null;

// Handle the drag start event
function handleDragStart(event) {
    draggedElement = event.target;
    event.dataTransfer.effectAllowed = 'move';
}

// Handle the drag over event
function handleDragOver(event) {
    event.preventDefault(); // Allows the drop
    event.dataTransfer.dropEffect = 'move';
}

// Handle the drop event
function handleDrop(event) {
    event.preventDefault();
    if (draggedElement !== event.target && event.target.classList.contains('image')) {
        // Swap content of draggedElement and target
        const draggedElementIndex = Array.from(container.children).indexOf(draggedElement);
        const targetElementIndex = Array.from(container.children).indexOf(event.target);

        // Swap positions in the DOM
        container.insertBefore(draggedElement, container.children[targetElementIndex]);
        container.insertBefore(event.target, container.children[draggedElementIndex]);

        // Clear the draggedElement reference
        draggedElement = null;
    }
}

// Handle the drag end event
function handleDragEnd() {
    draggedElement = null;
}
