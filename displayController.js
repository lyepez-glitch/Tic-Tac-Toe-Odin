import updateVal from "./updateValue.js";

let displayController = function(board, gameBoardEle, playerTurn, player1, player2) {

    board = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ];
    let rowsToRemove = gameBoardEle.querySelectorAll(".rowContainer");
    rowsToRemove.forEach((row) => row.remove());
    board.forEach((row, rowIndex) => {
        let rowEle = document.createElement('div');
        rowEle.classList.add("rowContainer");
        row.forEach((piece, colIndex) => {
            let pieceEle = document.createElement('div');
            pieceEle.textContent = piece;
            pieceEle.classList.add("pieceEle");
            pieceEle.addEventListener('click', function() {
                playerTurn = updateVal(rowIndex, colIndex, pieceEle, playerTurn, player1, player2, board)

            });

            rowEle.appendChild(pieceEle);
            gameBoardEle.appendChild(rowEle);
        })


    })
    return { playerTurn };
}

export default displayController;