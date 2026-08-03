const content = document.querySelector("body");
const container = document.querySelector("#container");

const newGridBtn = document.createElement("button");
newGridBtn.classList.add("newGridBtn");
newGridBtn.textContent = "New Grid";
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



function changeSquareColor() {
    let currentOpacity;
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.opacity = "0.1";
        currentOpacity = square.style.opacity;
    })

    squares.forEach((square) => {
        // have a set opacity for square color

        console.log(currentOpacity)
        square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.background = `rgb(${r}, ${g}, ${b})`;
            square.style.opacity = currentOpacity + 0.1;
            currentOpacity = square.style.opacity
        });
        console.log(currentOpacity)
        console.log(square.style.opacity)

    })
}





