// Etch-a-Sketch

let numSquares;
let isBlack = false;
let isRainbow = false;
let isRandom = false;
let isGrayscale = false;

const field = document.querySelector('#sketch');

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

    const squares = document.querySelectorAll('[id^="square-"]');
    squares.forEach(function(square) {
        square.addEventListener('mouseover', function () {
            if (isBlack) {
                square.style.backgroundColor = 'black';
            } else if (isRainbow) {
                square.style.backgroundColor = getRainbowColor();
            } else if (isRandom) {
                square.style.backgroundColor = getRandomColor();
            }
        });
    });
};

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', function () {
    isBlack = true;
    isRainbow = false;
    isRandom = false;
    isGrayscale = false;
});

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', function () {
    isRainbow = true;
    isBlack = false;
    isRandom = false;
    isGrayscale = false;
});

const randomButton = document.querySelector('#random_');
randomButton.addEventListener('click', function () {
    isRandom = true;
    isBlack = false;
    isRainbow = false;
    isGrayscale = false;
});

const grayscaleButton = document.querySelector('#grayscale');
grayscaleButton.addEventListener('click', function () {
    isGrayscale = true;
    isBlack = false;
    isRainbow = false;
    isRandom = false;
});

function getRainbowColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet']
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color; 
}

function getRandomColor() {
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
};

function randomNum() {
    return Math.floor(Math.random() * 256);
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

const reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
    field.innerHTML = '';
    isBlack = false;
    isRainbow = false;
    isGrayscale = false;
});


