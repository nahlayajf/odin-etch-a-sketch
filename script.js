const container = document.querySelector("#container");
function promptSize() {
    let size = prompt("Please enter number 1-100:", "16")
    return size;
}



function genGrid(size) {
    let n = size;
    totalSquares = n * n
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

    }

    // console.log(totalSquares) fix how many squares are being genrated
}

let size = promptSize();
genGrid(size);


// When User clicks "new grid button"
// User prompted for size "1-100"
// A gride of that size is generated
// Color of squares is resets

// When User hovers over a square 
// Square changes color 




