window.onload = () => {
    createGrid("16");
    activateMode(DEFAULT_MODE);
}

const DEFAULT_COLOR = "#FFFFFF";
const DEFAULT_MODE = "color-mode";
const DEFAULT_SIZE = 16;

const gridSize = DEFAULT_SIZE;
const currentColor = DEFAULT_COLOR;

const size = document.querySelector(".size");
const sizeText = document.querySelector(".size-text");
const drawingArea = document.querySelector(".drawing-area");

size.onmousemove = () => {
    changeSizeText(size.value);
}

size.onchange = () => {
    clearGrid();
    createGrid(size.value);
}

function changeSizeText(sizeVal) {
    sizeText.innerHTML = `${sizeVal}x${sizeVal}`;
}

function clearGrid() {
    drawingArea.innerHTML = '';
}

function createGrid(sizeVal) {
    for(let i=0; i<sizeVal*sizeVal; i++) {
        let block = document.createElement("div");
        drawingArea.appendChild(block);
    }
    drawingArea.style.gridTemplateRows = `repeat(${sizeVal}, 1fr)`;
    drawingArea.style.gridTemplateColumns = `repeat(${sizeVal}, 1fr)`;
}

let currentMode = DEFAULT_MODE;

function changeMode(newMode) {
    activateMode(newMode);
    currentMode = newMode;
}

const colorPicker = document.querySelector(".color-picker");
const colorMode = document.querySelector(".color-mode");
const rainbow = document.querySelector(".rainbow");
const realistic = document.querySelector(".realistic");
const eraser = document.querySelector(".eraser");
const clearAll = document.querySelector(".clear-all");

function activateMode(newMode) {
    if (currentMode == "color-mode") {
        colorMode.classList.remove("btn-on");
    } else if (currentMode == "rainbow") {
        rainbow.classList.remove("btn-on");
    } else if (currentMode == "realistic") {
        realistic.classList.remove("btn-on");
    } else if (currentMode == "eraser") {
        eraser.classList.remove("btn-on");
    }

    if (newMode == "color-mode") {
        colorMode.classList.add("btn-on");
    } else if (newMode == "rainbow") {
        rainbow.classList.add("btn-on");
    } else if (newMode == "realistic") {
        realistic.classList.add("btn-on");
    } else if (newMode == "eraser") {
        eraser.classList.add("btn-on");
    }
}

colorMode.onmouseover = () => colorMode.classList.add("btn-hover");
colorMode.onmouseout = () => colorMode.classList.remove("btn-hover");
rainbow.onmouseover = () => rainbow.classList.add("btn-hover");
rainbow.onmouseout = () => rainbow.classList.remove("btn-hover");
realistic.onmouseover = () => realistic.classList.add("btn-hover");
realistic.onmouseout = () => realistic.classList.remove("btn-hover");
eraser.onmouseover = () => eraser.classList.add("btn-hover");
eraser.onmouseout = () => eraser.classList.remove("btn-hover");
clearAll.onmouseover = () => clearAll.classList.add("btn-hover");
clearAll.onmouseout = () => clearAll.classList.remove("btn-hover");

colorMode.onclick = () => changeMode("color-mode");
rainbow.onclick = () => changeMode("rainbow");
realistic.onclick = () => changeMode("realistic");
eraser.onclick = () => changeMode("eraser");

clearAll.onmousedown = () => clearAll.classList.add("btn-on");
clearAll.onmouseup = () => clearAll.classList.remove("btn-on");
