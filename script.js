// Etch-a-Sketch

// Declare and initialize variables
let numSquares;
let isBlack = false;
let isRainbow = false;
let isRandom = false;
let isGrayscale = false;
let isEraser = false;

// Declare and initialize buttons
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const randomButton = document.querySelector('#random_');
const grayscaleButton = document.querySelector('#grayscale');
const eraserButton = document.querySelector('#eraser');
const x8 = document.querySelector('#x8');
const x12 = document.querySelector('#x12');
const x16 = document.querySelector('#x16');

// Select the drawing field.
const field = document.querySelector('#sketch');

// Function to get random rainbow color.
function getRainbowColor() {
  const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

// Function to get random number.
function randomNum() {
  return Math.floor(Math.random() * 256);
}

// Function to get random color from random number.
function getRandomColor() {
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

// Function to get grayscale color.
function getGrayscale(square) {
  const cell = square;
  let grayScaleLevel = Number(cell.dataset.grayScaleLevel);
  grayScaleLevel = Math.max(grayScaleLevel - 10, 0);
  cell.dataset.grayScaleLevel = grayScaleLevel;
  const grayScaleValue = Math.floor((grayScaleLevel * 255) / 100);
  return `rgb(${grayScaleValue}, ${grayScaleValue}, ${grayScaleValue})`;
}

// Function to create squares on the drawing field.
function createSquares(num) {
  // Clear the field.
  field.innerHTML = '';
  // Set up the grid.
  field.style.display = 'grid';
  field.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  field.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  // Create squares.
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < num * num; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', `square-${i}`);
    square.style.border = '1px solid black';
    square.dataset.grayScaleLevel = 100;
    field.appendChild(square);
  }

  // Select all created squares.
  const squares = document.querySelectorAll('[id^="square-"]');
  // Add mouseover event listener to each square.
  squares.forEach((square) => {
    const cell = square;
    cell.addEventListener('mouseover', () => {
      if (isBlack) {
        cell.style.backgroundColor = 'black';
      } else if (isRainbow) {
        cell.style.backgroundColor = getRainbowColor();
      } else if (isRandom) {
        cell.style.backgroundColor = getRandomColor();
      } else if (isGrayscale) {
        cell.style.backgroundColor = getGrayscale(cell);
      } else if (isEraser) {
        cell.style.backgroundColor = 'white';
        cell.dataset.grayScaleLevel = 100;
      }
    });
  });
}

// Add click event listeners to button, black color.
blackButton.addEventListener('click', () => {
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
rainbowButton.addEventListener('click', () => {
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
randomButton.addEventListener('click', () => {
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
grayscaleButton.addEventListener('click', () => {
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
eraserButton.addEventListener('click', () => {
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

// Add an event listener to input field for number of squares.
const numInput = document.querySelector('#number');
numInput.addEventListener('keydown', (e) => {
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
x8.addEventListener('click', () => {
  numSquares = 8;
  createSquares(numSquares);
  // Highlight the selected button and reset the color of the other buttons.
  x8.style.color = 'white';
  x12.style.color = '#04202c';
  x16.style.color = '#04202c';
});

// Select the button for creating 12 squares and add a click event listener.
x12.addEventListener('click', () => {
  numSquares = 12;
  createSquares(numSquares);
  // Highlight the selected button and reset the color of the other buttons.
  x12.style.color = 'white';
  x8.style.color = '#04202c';
  x16.style.color = '#04202c';
});

// Select the button for creating 16 squares and add a click event listener.
x16.addEventListener('click', () => {
  numSquares = 16;
  createSquares(numSquares);
  // Highlight the selected button and reset the color of the other buttons.
  x16.style.color = 'white';
  x8.style.color = '#04202c';
  x12.style.color = '#04202c';
});

// Select the reset button and add a click event listener
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
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
  eraserButton.style.color = '#04202c';
  x8.style.color = '#04202c';
  x12.style.color = '#04202c';
  x16.style.color = '#04202c';
});
