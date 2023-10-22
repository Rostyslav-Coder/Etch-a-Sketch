// Etch-a-Sketch

let numSquares;
let isBlack = false;
let isRainbow = false;
let isRandom = false;
let isGrayscale = false;
let isEraser = false;

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
        square.dataset.grayScaleLevel = 100;
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
            } else if (isGrayscale) {
                square.style.backgroundColor = getGrayscale(square);
            } else if (isEraser) {
                square.style.backgroundColor = 'white';
                square.dataset.grayScaleLevel = 100;
            }
        });
    });
};

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', function () {
    if (!isBlack) {
        isBlack = true;
        isRainbow = false;
        isRandom = false;
        isGrayscale = false;
        isEraser = false;
        blackButton.style.color = 'white';
        rainbowButton.style.color = '#04202c';
        randomButton.style.color = '#04202c';
        grayscaleButton.style.color = '#04202c';
        eraserButton.style.color = '#04202c';
    } else {
        isBlack = false;
        isRainbow = false;
        isRandom = false;
        isGrayscale = false;
        isEraser = false;
        blackButton.style.color = '#04202c';
    }
});

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', function () {
    if (!isRainbow) {
        isRainbow = true;
        isBlack = false;
        isRandom = false;
        isGrayscale = false;
        isEraser = false;
        rainbowButton.style.color = 'white';
        blackButton.style.color = '#04202c';
        randomButton.style.color = '#04202c';
        grayscaleButton.style.color = '#04202c';
        eraserButton.style.color = '#04202c';
    } else {
        isBlack = false;
        isRainbow = false;
        isRandom = false;
        isGrayscale = false;
        isEraser = false;
        rainbowButton.style.color = '#04202c';
    }
});

const randomButton = document.querySelector('#random_');
randomButton.addEventListener('click', function () {
    if (!isRandom) {
        isRandom = true;
        isBlack = false;
        isRainbow = false;
        isGrayscale = false;
        isEraser = false;
        randomButton.style.color = 'white';
        blackButton.style.color = '#04202c';
        rainbowButton.style.color = '#04202c';
        grayscaleButton.style.color = '#04202c';
        eraserButton.style.color = '#04202c';
    } else {
        isBlack = false;
        isRainbow = false;
        isRandom = false;
        isGrayscale = false;
        isEraser = false;
        randomButton.style.color = '#04202c';
    }
});

const grayscaleButton = document.querySelector('#grayscale');
grayscaleButton.addEventListener('click', function () {
    if (!isGrayscale) {
        isGrayscale = true;
        isBlack = false;
        isRainbow = false;
        isRandom = false;
        isEraser = false;
        grayscaleButton.style.color = 'white';
        blackButton.style.color = '#04202c';
        rainbowButton.style.color = '#04202c';
        randomButton.style.color = '#04202c';
        eraserButton.style.color = '#04202c';
    } else {
        isBlack = false;
        isRainbow = false;
        isRandom = false;
        isGrayscale = false;
        isEraser = false;
        grayscaleButton.style.color = '#04202c';
    }
});

const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', function () {
    if (!isEraser) {
        isEraser = true;
        isBlack = false;
        isRainbow = false;
        isRandom = false;
        isGrayscale = false;
        eraserButton.style.color = 'white';
        blackButton.style.color = '#04202c';
        rainbowButton.style.color = '#04202c';
        randomButton.style.color = '#04202c';
        grayscaleButton.style.color = '#04202c';
    } else {
        isBlack = false;
        isRainbow = false;
        isRandom = false;
        isGrayscale = false;
        isEraser = false;
        eraserButton.style.color = '#04202c';
    }
});

function getRainbowColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet']
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color; 
};

function randomNum() {
    return Math.floor(Math.random() * 256);
};

function getRandomColor() {
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
};

function getGrayscale(square) {
    let grayScaleLevel = Number(square.dataset.grayScaleLevel);
    grayScaleLevel = Math.max(grayScaleLevel - 10, 0);
    square.dataset.grayScaleLevel = grayScaleLevel;
    let grayScaleValue = Math.floor(grayScaleLevel * 255 / 100);
    return `rgb(${grayScaleValue}, ${grayScaleValue}, ${grayScaleValue})`;
};

const numInput = document.querySelector('#number');
numInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        numSquares = Number(numInput.value);
        if (numSquares > 32) {
            numSquares = 32;
        }
        createSquares(numSquares);
        numInput.value = '';
    }
    x8.style.color = '#04202c';
    x12.style.color = '#04202c';
    x16.style.color = '#04202c';
});

const x8 = document.querySelector('#x8');
x8.addEventListener('click', function () {
    numSquares = 8;
    createSquares(numSquares);
    x8.style.color = 'white';
    x12.style.color = '#04202c';
    x16.style.color = '#04202c';
});

const x12 = document.querySelector('#x12');
x12.addEventListener('click', function () {
    numSquares = 12;
    createSquares(numSquares);
    x12.style.color = 'white';
    x8.style.color = '#04202c';
    x16.style.color = '#04202c';
});

const x16 = document.querySelector('#x16');
x16.addEventListener('click', function () {
    numSquares = 16;
    createSquares(numSquares);
    x16.style.color = 'white';
    x8.style.color = '#04202c';
    x12.style.color = '#04202c';
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
    field.innerHTML = '';
    isBlack = false;
    isRainbow = false;
    isRandom = false;
    isGrayscale = false;
    blackButton.style.color = '#04202c';
    rainbowButton.style.color = '#04202c';
    randomButton.style.color = '#04202c';
    grayscaleButton.style.color = '#04202c';
    x8.style.color = '#04202c';
    x12.style.color = '#04202c';
    x16.style.color = '#04202c';
});
