function Gameboard() {
    let board = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ];



    return { board }
}
const board = Gameboard().board;

function player(label, type) {
    let score = 0;
    let addPoint = () => score++;
    let marker = type;
    let name = label;
    return { score, addPoint, marker, name }
}
const players = [
    player("1", "X"),
    player("2", "O")
]
let currentPlayer = players[0];

function displayController() {
    // const board = Gameboard().board;

    board.forEach((row, rowIndex) => {
        let rowEle = document.createElement('div');
        rowEle.classList.add("rowContainer");
        row.forEach((piece, pieceIndex) => {
            let pieceEle = document.createElement('div');
            pieceEle.textContent = piece;
            pieceEle.classList.add("pieceEle");
            pieceEle.addEventListener('click', function() {
                console.log("update piece")
                changeValue(pieceEle, currentPlayer, rowIndex, pieceIndex);
                if (currentPlayer === players[0]) {
                    currentPlayer = players[1];

                } else if (currentPlayer === players[1]) {
                    currentPlayer = players[0];
                }
            });
            rowEle.appendChild(pieceEle);

        })
        gameBoardEle.appendChild(rowEle);
    })
}


let start = () => {
    let rows = gameBoardEle.querySelectorAll(".rowContainer");
    rows.forEach((row => {
        let pieces = row.querySelectorAll("div");
        pieces.forEach((piece) => {
            piece.textContent = '0';
            gameBoardEle.style.display = "block";
        })
    }))
};
let startBtn = document.createElement('button');
let restartBtn = document.createElement('button');
startBtn.addEventListener("click", start);
restartBtn.addEventListener("click", start);

startBtn.textContent = "Start";
restartBtn.textContent = "Start Over";
let gameBoardEle = document.querySelector('#gameBoard');
document.body.appendChild(startBtn);
document.body.appendChild(restartBtn);
gameBoardEle.style.display = "none";

function changeValue(pieceEle, currentPlayer, rowIndex, pieceIndex) {
    currentPlayer.addPoint();
    pieceEle.textContent = currentPlayer.marker;
    board[rowIndex][pieceIndex] = currentPlayer.marker;
    console.log("board ", board);
    if (threeInRow(player, board)) {
        console.log("three in row")
    }

}

function threeInRow(player, board) {
    const marker = player.marker;
    let count = 0;
    let result = false;
    for (let i = 0; i < 3; i++) {
        let row = board[i];
        row.forEach(function(piece) {
            if (piece === marker) {
                count++;
            }
        })
    }
    return result;
}


displayController()