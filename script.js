// Etch-a-Sketch

// Declare and initialize color variables
const darkBlueGrey = '#04202C';
const lightOliveGrey = '#C9D1CB';
const white = '#FFF';

// Declare and initialize variables
let numSquares;

// Declare and initialize button switcher
const buttonSwitcher = {
  isBlack: false,
  isRainbow: false,
  isRandom: false,
  isGrayscale: false,
  isEraser: false,
};

// Declare and initialize brushes buttons
const brushesButtons = {
  blackButton: document.querySelector('#black'),
  rainbowButton: document.querySelector('#rainbow'),
  randomButton: document.querySelector('#random_'),
  grayscaleButton: document.querySelector('#grayscale'),
  eraserButton: document.querySelector('#eraser'),
};

// Declare and initialize grig buttons
const gridCreater = {
  grid_8: document.querySelector('#x8'),
  grid_12: document.querySelector('#x12'),
  grid_16: document.querySelector('#x16'),
};

// Declare and initialize input grig creater
const numInput = document.querySelector('#number');

// Declare and initialize the drawing board.
const drawingBoard = document.querySelector('#sketch');

// FUnction to reset all color modes to false
function resetsBrushSwitcher() {
  Object.keys(buttonSwitcher).forEach((key) => {
    buttonSwitcher[key] = false;
  });
}

// Function to reset the styles of all colors buttons
function resetButtonStyles() {
  Object.values(brushesButtons).forEach((button) => {
    if (button) {
      // eslint-disable-next-line no-param-reassign
      button.style.color = darkBlueGrey;
    }
  });
}

// Function to reset the styles of all number buttons
function resetsNumberButtonStyles() {
  Object.values(gridCreater).forEach((button) => {
    if (button) {
      // eslint-disable-next-line no-param-reassign
      button.style.color = darkBlueGrey;
    }
  });
}

// Function to get random rainbow color.
function getRainbowColor() {
  const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

// Function to get random number.
function getRandomNum() {
  return Math.floor(Math.random() * 256);
}

// Function to get random color from random number.
function getRandomColor() {
  return `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
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

// Function to create the grid on the drawing board
function createSquares(num) {
  // Clear the field.
  drawingBoard.innerHTML = '';
  // Set up the grid.
  drawingBoard.style.display = 'grid';
  drawingBoard.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  drawingBoard.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  // Create squares.
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < num * num; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', `square-${i}`);
    square.style.border = `1px solid ${darkBlueGrey}`;
    square.dataset.grayScaleLevel = 100;
    drawingBoard.appendChild(square);
  }

  // Select all created squares.
  const squares = document.querySelectorAll('[id^="square-"]');
  // Add mouseover event listener to each square.
  squares.forEach((square) => {
    const cell = square;
    cell.addEventListener('mouseover', () => {
      if (buttonSwitcher.isBlack) {
        cell.style.backgroundColor = 'black';
      } else if (buttonSwitcher.isRainbow) {
        cell.style.backgroundColor = getRainbowColor();
      } else if (buttonSwitcher.isRandom) {
        cell.style.backgroundColor = getRandomColor();
      } else if (buttonSwitcher.isGrayscale) {
        cell.style.backgroundColor = getGrayscale(cell);
      } else if (buttonSwitcher.isEraser) {
        cell.style.backgroundColor = lightOliveGrey;
        cell.dataset.grayScaleLevel = 100;
      }
    });
  });
}

// Add click event listeners to button, black color.
brushesButtons.blackButton.addEventListener('click', () => {
  if (!buttonSwitcher.isBlack) {
    resetsBrushSwitcher();
    buttonSwitcher.isBlack = true;
    resetButtonStyles();
    brushesButtons.blackButton.style.color = white;
  } else {
    resetsBrushSwitcher();
    brushesButtons.blackButton.style.color = darkBlueGrey;
  }
});

// Add click event listeners to button, random rainbow color.
brushesButtons.rainbowButton.addEventListener('click', () => {
  if (!buttonSwitcher.isRainbow) {
    resetsBrushSwitcher();
    buttonSwitcher.isRainbow = true;
    resetButtonStyles();
    brushesButtons.rainbowButton.style.color = white;
  } else {
    resetsBrushSwitcher();
    brushesButtons.rainbowButton.style.color = darkBlueGrey;
  }
});

// Add click event listeners to button, random RGB color.
brushesButtons.randomButton.addEventListener('click', () => {
  if (!buttonSwitcher.isRandom) {
    resetsBrushSwitcher();
    buttonSwitcher.isRandom = true;
    resetButtonStyles();
    brushesButtons.randomButton.style.color = white;
  } else {
    resetsBrushSwitcher();
    brushesButtons.randomButton.style.color = darkBlueGrey;
  }
});

// Add click event listeners to button, with conversion from grayscale to RGB.
brushesButtons.grayscaleButton.addEventListener('click', () => {
  if (!buttonSwitcher.isGrayscale) {
    resetsBrushSwitcher();
    buttonSwitcher.isGrayscale = true;
    resetButtonStyles();
    brushesButtons.grayscaleButton.style.color = white;
  } else {
    resetsBrushSwitcher();
    brushesButtons.grayscaleButton.style.color = darkBlueGrey;
  }
});

// Add click event listeners to button, which clears the squares.
brushesButtons.eraserButton.addEventListener('click', () => {
  if (!buttonSwitcher.isEraser) {
    resetsBrushSwitcher();
    buttonSwitcher.isEraser = true;
    resetButtonStyles();
    brushesButtons.eraserButton.style.color = white;
  } else {
    resetsBrushSwitcher();
    brushesButtons.eraserButton.style.color = darkBlueGrey;
  }
});

// Add an event listener to input field for number of squares.
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
  resetsNumberButtonStyles();
});

// Select the button for creating 8 squares and add a click event listener.
gridCreater.grid_8.addEventListener('click', () => {
  numSquares = 8;
  createSquares(numSquares);
  // Highlight the selected button and reset the color of the other buttons.
  resetsNumberButtonStyles();
  gridCreater.grid_8.style.color = white;
});

// Select the button for creating 12 squares and add a click event listener.
gridCreater.grid_12.addEventListener('click', () => {
  numSquares = 12;
  createSquares(numSquares);
  // Highlight the selected button and reset the color of the other buttons.
  resetsNumberButtonStyles();
  gridCreater.grid_12.style.color = white;
});

// Select the button for creating 16 squares and add a click event listener.
gridCreater.grid_16.addEventListener('click', () => {
  numSquares = 16;
  createSquares(numSquares);
  // Highlight the selected button and reset the color of the other buttons.
  resetsNumberButtonStyles();
  gridCreater.grid_16.style.color = white;
});

// Select the reset button and add a click event listener
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  drawingBoard.innerHTML = '';
  // Reset all color modes to false
  resetsBrushSwitcher();
  // Reset the color of all buttons
  resetButtonStyles();
  resetsNumberButtonStyles();
});
