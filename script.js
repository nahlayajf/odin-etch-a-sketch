
const container = document.querySelector("#container");
const content = document.querySelector("body");
const newGridBtn = document.createElement("button");
newGridBtn.classList.add("newGridBtn");
newGridBtn.textContent = "New Size";
content.appendChild(newGridBtn);

newGridBtn.addEventListener("click", () => {
    resetGrid();
    const size = promptSize()
    genGrid(size);
    changeSquareColor();

}

)

function promptSize() {
    let size;
    do {
        size = prompt("Please enter number 1-100:", "16");
    } while (size > 100);
    return size;
}



function genGrid(size) {

    let n = size;
    totalSquares = n * n
    let percentage = 100 / n
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.style.flex = `0 0 ${percentage}%`;
        square.style.height = `${percentage}%`

    }

}

function resetGrid() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}
let size = promptSize();
genGrid(size);


function changeSquareColor() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => changeSquareColor()
        );
        function changeSquareColor() {
            square.style.background = "blue";
        }
    })
}







