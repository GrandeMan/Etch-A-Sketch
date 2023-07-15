const container = document.querySelector('.container');
const innerContainer = document.querySelector('.inner-container');

// Function to draw when mouse is down and stop drawing when up

let isDrawing = false;

function whenMouseDown(down) {
    isDrawing = true;
    down.target.style.backgroundColor = '#00FF41';
}

function whenMouseEnter(enter) { //mouseover does not work because it bubbles up DOM tree, whereas mouseenter only affects the target element
    if (isDrawing) {
        enter.target.style.backgroundColor = '#00FF41';
    }
}

function whenMouseUp() {
    isDrawing = false;
}


function createGrid(gridSize = 16) {
    innerContainer.innerHTML = '';

    // Calculate square size as percentage
    const squareSize = `${100 / gridSize}%`; 
    

    // Loop to draw squares
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.className = 'grid-square';
        square.addEventListener('mousedown', whenMouseDown);
        square.addEventListener('mouseenter', whenMouseEnter);
        innerContainer.appendChild(square);
    }

    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.style.width = squareSize;
        square.style.paddingBottom = squareSize;
    });

    window.addEventListener('mouseup', whenMouseUp);

}

createGrid();

// Button to change grid size
const gridSelector = document.querySelector('.grid-size');
gridSelector.addEventListener('click', () => {
    let choice = +prompt('Enter Grid Size (up to 100)', '');
    if (choice <= 100 && choice > 1) {
        createGrid(choice);
    } else {
        alert('Invalid grid size! Please enter a number between 2 and 100.');
    }
});

// Button to clear grid
const buttons = document.querySelector('.buttons');
const clear = document.createElement('button');
clear.className = 'clear-button';
clear.textContent = 'Clear';
clear.addEventListener('click', () => {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.style.backgroundColor = '';
    });
});

buttons.appendChild(clear);