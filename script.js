const container = document.querySelector('.container');
const grid = 16;

for (let i = 0; i < grid; i++) {    //Create loop for drawing squares
    const square = document.createElement('div');
    square.className = 'grid-square';
    container.appendChild(square);
};




