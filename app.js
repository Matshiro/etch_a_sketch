let gridSize = 64;
let brushColor = "#000000";
let eraserColor = "#FFFFFF";
let currentMode = "paint";


const pixelContainer = document.getElementById('pixelContainer');
const colorButton = document.getElementById('colorButton');
const paintButton = document.getElementById('paintButton');
const eraseButton = document.getElementById('eraserButton');
const clearButton = document.getElementById('clearButton');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');



colorButton.oninput = (e) => setCurrentColor(e.target.value);
paintButton.onclick = () => setActiveMode("paint");
eraserButton.onclick = () => setActiveMode("erase");
clearButton.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);


document.addEventListener("DOMContentLoaded", function() {
    createGrid();
  });


function createGrid(){

    pixelContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    pixelContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr);`
    for (let i = 0; i < gridSize * gridSize; i++){
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = '#FFFFFF'
        newDiv.addEventListener('mousedown', changeColor)
        newDiv.addEventListener('mouseover', changeColor)
        pixelContainer.appendChild(newDiv);
    }
}

let mouseDown = false
document.onmousedown = () => (mouseDown = true)
document.onmouseup = () => (mouseDown = false)


function changeColor(e){
    if (e.type === "mouseover" && !mouseDown) return
    else if (currentMode == "paint"){
        e.target.style.backgroundColor = brushColor;
    }
    else if (currentMode == "erase"){
        e.target.style.backgroundColor = eraserColor;
    }
}

function setCurrentColor(color){
    brushColor = color;
}

function setActiveMode(type){
    if (type === "paint"){
        paintButton.classList.add('active');
        eraseButton.classList.remove('active');
        currentMode = "paint";
    }
    else if (type === "erase"){
        eraseButton.classList.add('active');
        paintButton.classList.remove('active');
        currentMode = "erase";
    }
}

function changeSize(value) {
    gridSize = value
    reloadGrid()
  }

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
  }

function reloadGrid(){
    pixelContainer.innerHTML = '';
    createGrid();
}