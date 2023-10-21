// Etch-a-Sketch

const field = document.querySelector('#sketch');

let numSquares;

function createSquares(num) {
    field.innerHTML = '';
    field.style.display = 'grid';
    field.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    field.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    for ( let i = 0; i < num * num; i++ ) {
        let square = document.createElement('div');
        square.setAttribute('id', 'square-' + i);
        square.style.border = '1px solid black';
        field.appendChild(square);
    };
};

const x8 = document.querySelector('#x8');
x8.addEventListener('click', function () {
    numSquares = 8;
    createSquares(numSquares);
});

const x12 = document.querySelector('#x12');
x12.addEventListener('click', function () {
    numSquares = 12;
    createSquares(numSquares);
});

const x16 = document.querySelector('#x16');
x16.addEventListener('click', function () {
    numSquares = 16;
    createSquares(numSquares);
});

const pencilBlack = document.querySelector('#black');


