const container = document.querySelector('.inner-container');
const grid = 256;

for (let i = 0; i < grid; i++) {    //Create loop for drawing squares
    const square = document.createElement('div');
    square.className = 'grid-square';
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = '#00FF41';
    });

};

const buttons = document.querySelector('.buttons');
    const clear = document.createElement('button');
    clear.className = 'clear-button';
    clear.textContent = 'Clear';
    clear.addEventListener('click', () => {
        const squares = document.querySelectorAll('.grid-square');
        squares.forEach(square => {
        square.style.backgroundColor = '';
        });
    });

    buttons.appendChild(clear);


