let gridSize = 16;
let brushColor = "#000000";
let eraserColor = "#FFFFFF";

const pixelContainer = document.getElementById('pixelContainer');

document.addEventListener("DOMContentLoaded", function() {
    createGrid();
  });

function createGrid(){

    pixelContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    pixelContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr);`
    for (let i = 0; i < gridSize * gridSize; i++){
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = '#FFFFFF'
        pixelContainer.appendChild(newDiv);
    }
}