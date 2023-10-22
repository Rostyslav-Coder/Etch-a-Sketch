// Etch-a-Sketch

// Declare and initialize variables
let numSquares;
let isBlack = false;
let isRainbow = false;
let isRandom = false;
let isGrayscale = false;
let isEraser = false;

// Select the drawing field.
const field = document.querySelector('#sketch');

// Function to create squares on the drawing field.
function createSquares(num) {
    // Clear the field.
    field.innerHTML = '';
    // Set up the grid.
    field.style.display = 'grid';
    field.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    field.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    // Create squares.
    for ( let i = 0; i < num * num; i++ ) {
        let square = document.createElement('div');
        square.setAttribute('id', 'square-' + i);
        square.style.border = '1px solid black';
        square.dataset.grayScaleLevel = 100;
        field.appendChild(square);
    };

    // Select all created squares.
    const squares = document.querySelectorAll('[id^="square-"]');
    // Add mouseover event listener to each square.
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

// Add click event listeners to button, black color.
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

// Add click event listeners to button, random rainbow color.
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

// Add click event listeners to button, random RGB color.
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

// Add click event listeners to button, with conversion from grayscale to RGB.
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

// Add click event listeners to button, which clears the squares.
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

// Function to get random rainbow color.
function getRainbowColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet']
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color; 
};

// Function to get random number.
function randomNum() {
    return Math.floor(Math.random() * 256);
};

// Function to get random color from random number.
function getRandomColor() {
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
};

// Function to get grayscale color.
function getGrayscale(square) {
    let grayScaleLevel = Number(square.dataset.grayScaleLevel);
    grayScaleLevel = Math.max(grayScaleLevel - 10, 0);
    square.dataset.grayScaleLevel = grayScaleLevel;
    let grayScaleValue = Math.floor(grayScaleLevel * 255 / 100);
    return `rgb(${grayScaleValue}, ${grayScaleValue}, ${grayScaleValue})`;
};

// Add an event listener to input field for number of squares.
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

    // Reset the color of the buttons for selecting the number of squares.
    x8.style.color = '#04202c';
    x12.style.color = '#04202c';
    x16.style.color = '#04202c';
});

// Select the button for creating 8 squares and add a click event listener.
const x8 = document.querySelector('#x8');
x8.addEventListener('click', function () {
    numSquares = 8;
    createSquares(numSquares);
    // Highlight the selected button and reset the color of the other buttons.
    x8.style.color = 'white';
    x12.style.color = '#04202c';
    x16.style.color = '#04202c';
});

// Select the button for creating 12 squares and add a click event listener.
const x12 = document.querySelector('#x12');
x12.addEventListener('click', function () {
    numSquares = 12;
    createSquares(numSquares);
    // Highlight the selected button and reset the color of the other buttons.
    x12.style.color = 'white';
    x8.style.color = '#04202c';
    x16.style.color = '#04202c';
});

// Select the button for creating 16 squares and add a click event listener.
const x16 = document.querySelector('#x16');
x16.addEventListener('click', function () {
    numSquares = 16;
    createSquares(numSquares);
    // Highlight the selected button and reset the color of the other buttons.
    x16.style.color = 'white';
    x8.style.color = '#04202c';
    x12.style.color = '#04202c';
});

// Select the reset button and add a click event listener
const reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
    field.innerHTML = '';
    // Reset all color modes to false
    isBlack = false;
    isRainbow = false;
    isRandom = false;
    isGrayscale = false;
    isEraser = false;
    // Reset the color of all buttons
    blackButton.style.color = '#04202c';
    rainbowButton.style.color = '#04202c';
    randomButton.style.color = '#04202c';
    grayscaleButton.style.color = '#04202c';
    x8.style.color = '#04202c';
    x12.style.color = '#04202c';
    x16.style.color = '#04202c';
});
