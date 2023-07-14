const container = document.querySelector('.inner-container');
const grid = 256;

for (let i = 0; i < grid; i++) {    //Create loop for drawing squares
    const square = document.createElement('div');
    square.className = 'grid-square';
    container.appendChild(square);
};




