const container = document.querySelector('.container');
const innerContainer = document.querySelector('.inner-container');
const drawButton = document.querySelector ('.draw-button');
const eraseButton = document.querySelector('.erase-button');

let isDrawing = false;
let isErasing = false;

isDrawingMode();

function isDrawingMode() {
    isDrawing = true;
    isErasing = false;
}

function isErasingMode() {
    isDrawing = false;
    isErasing = true;
}

function whenMouseDown(click) {
    if (isDrawing) {
        click.target.style.backgroundColor = '#00FF41';
    } else if (isErasing) {
        click.target.style.backgroundColor = '';
    }
}

function whenMouseEnter(hover) {
    if (isDrawing && hover.buttons) {
        hover.target.style.backgroundColor = '#00FF41';
    } else if (isErasing && hover.buttons) {
        hover.target.style.backgroundColor = '';
    }
}

function whenMouseUp(unclick) {
    if (unclick.button === 0) {
        if (isDrawing) {
            isErasing = false;
        } else if (isErasing) {
            isDrawing = false;
        }
    }
}

drawButton.addEventListener('click', isDrawingMode);
eraseButton.addEventListener('click', isErasingMode);


function createGrid(gridSize = 50) {
    innerContainer.innerHTML = '';

    // Calculate square size as percentage
    const squareSize = `${100 / gridSize}%`; 
    

    // Loop to draw squares
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.className = 'grid-square';
        square.addEventListener('mousedown', whenMouseDown);
        square.addEventListener('mouseenter', whenMouseEnter);
        document.addEventListener('mouseup', whenMouseUp);
        square.addEventListener('dragstart', (drag) => {
            drag.preventDefault();
        });
        innerContainer.appendChild(square);
    }

    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.style.width = squareSize;
        square.style.paddingBottom = squareSize;
    });

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