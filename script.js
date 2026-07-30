
const container = document.querySelector("#container");
const content = document.querySelector("body");
const newGridBtn = document.createElement("button");
newGridBtn.classList.add("newGridBtn");
newGridBtn.textContent = "New Size";
content.appendChild(newGridBtn);

newGridBtn.addEventListener("click", () => promptSize()
);

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

let size = promptSize();
genGrid(size);
changeSquareColor();

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


// When User clicks "new grid button"
// User prompted for size "1-100"
// A gride of that size is generated
// Color of squares is resets
// When User hovers over a square 
// Square changes color 




