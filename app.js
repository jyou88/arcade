let boardback = document.querySelector(".boardback");
let gameboard = document.querySelector(".board");
let count = 0
let restartButton = document.getElementById('restartButton');
const gameState = {
    players: ['X', 'O'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}
let winningMessage = document.getElementById('winningMessage')


const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



function playGame(event) {
    if (event.target.innerHTML === "") {
        event.target.innerHTML = count % 2 === 0 ? "X" : "O"
        count++
    }
}


function restartGame() {
    gameState = {
        players: ['X', 'O'],
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
    }
    count = 0;
    render()

}

gameboard.addEventListener("click", playGame);

restartButton.addEventListener("click", restartGame);

// let tic = document.addEventListener("click", (event) => { })

// boardback.addEventListener("click", () => { })
// console.log(matrix[0][0]);

// let matrix = [

//     ["00", "01", "02"],
//     ["10", "11", "12"],
//     ["20", "21", "22"],
// ]

    // setInterval(() => {
    //     const arr = ["red", "blue", "yellow", "green"];

    //     let choose = arr[Math.floor(Math.random() * arr.lenth)];

    //     boardback.getElementsByClassName.background = choose;
    // }, 200);


    // const gameState = {
//     players: ['X', 'O'],
//     board: [
//         [null, null, null],
//         [null, null, null],
//         [null, null, null]
//     ]
// }
// gameState()