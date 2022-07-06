window.onload = () => {
    createGrid("16");
    activateMode(DEFAULT_MODE);
}

const DEFAULT_COLOR = "black";
const DEFAULT_MODE = "color-mode";
const DEFAULT_SIZE = 16;

const colorPicker = document.querySelector(".color-picker");
const colorMode = document.querySelector(".color-mode");
const rainbow = document.querySelector(".rainbow");
const eraser = document.querySelector(".eraser");
const clearAll = document.querySelector(".clear-all");
const size = document.querySelector(".size");
const sizeText = document.querySelector(".size-text");
const drawingArea = document.querySelector(".drawing-area");

let gridSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

let mouseDown = false;
drawingArea.onmousedown = () => mouseDown = true;
drawingArea.onmouseup = () => mouseDown = false;

function changeSizeText(sizeVal) {
    sizeText.innerHTML = `${sizeVal}x${sizeVal}`;
}

function clearGrid() {
    drawingArea.innerHTML = '';
}

function createGrid(sizeVal) {
    for(let i=0; i<sizeVal*sizeVal; i++) {
        let block = document.createElement("div");
        block.addEventListener("mousedown", changeColor);
        block.addEventListener("mouseover", changeColor);
        drawingArea.appendChild(block);
    }
    drawingArea.style.gridTemplateRows = `repeat(${sizeVal}, 1fr)`;
    drawingArea.style.gridTemplateColumns = `repeat(${sizeVal}, 1fr)`;
}

function changeMode(newMode) {
    activateMode(newMode);
    currentMode = newMode;
}

function activateMode(newMode) {
    if (currentMode == "color-mode") {
        colorMode.classList.remove("btn-on");
    } else if (currentMode == "rainbow") {
        rainbow.classList.remove("btn-on");
    } else if (currentMode == "eraser") {
        eraser.classList.remove("btn-on");
    }

    if (newMode == "color-mode") {
        colorMode.classList.add("btn-on");
    } else if (newMode == "rainbow") {
        rainbow.classList.add("btn-on");
    } else if (newMode == "eraser") {
        eraser.classList.add("btn-on");
    }
}

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function changeColor(e) {
    if (e.type == "mouseover" && !mouseDown) return;
    if (currentMode == "color-mode") {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode == "rainbow") {
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode == "eraser") {
        e.target.style.backgroundColor = "white";
    }
}

colorMode.onmouseover = () => colorMode.classList.add("btn-hover");
colorMode.onmouseout = () => colorMode.classList.remove("btn-hover");
rainbow.onmouseover = () => rainbow.classList.add("btn-hover");
rainbow.onmouseout = () => rainbow.classList.remove("btn-hover");
eraser.onmouseover = () => eraser.classList.add("btn-hover");
eraser.onmouseout = () => eraser.classList.remove("btn-hover");
clearAll.onmouseover = () => clearAll.classList.add("btn-hover");
clearAll.onmouseout = () => clearAll.classList.remove("btn-hover");

colorMode.onclick = () => changeMode("color-mode");
rainbow.onclick = () => changeMode("rainbow");
eraser.onclick = () => changeMode("eraser");

clearAll.onmousedown = () => clearAll.classList.add("btn-on");
clearAll.onmouseup = () => clearAll.classList.remove("btn-on");

colorPicker.onmouseout = () => {
    setCurrentColor(colorPicker.value);
}

size.onmousemove = () => {
    changeSizeText(size.value);
}
size.onchange = () => {
    clearGrid();
    createGrid(size.value);
}

clearAll.onclick = () => {
    clearGrid();
    createGrid(size.value);
}
