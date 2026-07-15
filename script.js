const container = document.querySelector("#container");
function promptSize() {
    let size = prompt("Please enter number 1-100:", "16")
    return size;
}
const square = document.createElement("div");
square.classList.add("square");
container.appendChild(square);







// function genGrid(size) {
//     let n = size;
//     totalSquares = (n * (n + 1) * (2 * n + 1)) / 6
//     // fix n 
//     for (let i = 0; i < totalSquares; i++) {
//         const square = document.createElement("div");
//         square.classList.add("square");
//         container.appendChild(square);
//         square.style.borderColor = "black";
//         square.style.borderWidth = "3px";

//     }
// }

// let size = promptSize();
// genGrid(size);


// When User clicks "new grid button"
// User prompted for size "1-100"
// A gride of that size is generated
// Color of squares is resets

// When User hovers over a square 
// Square changes color 




