//all funcs should be in game, player, or gameboard objects
//get a working game
//check when game is over
//3 in a row and ties

//make func to click on board square to place 'x' or 'o'
//if spot is already taken don't let them take it

//bitton to start and restart
//display element that shows results of game at end

let gameBoard = (function() {
    let board = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ];

    let player = function() {
        let score = 0;
    }
    let displayController = function(board) {
        let gameBoardEle = document.querySelector('#gameBoard');
        let startBtn = document.createElement('button');
        let startGame = () => {

        }
        let restartGame = () => {
            let board = [
                ['0', '0', '0'],
                ['0', '0', '0'],
                ['0', '0', '0']
            ];

            displayController(board);
            startGame();
        }
        startBtn.addEventListener("click", startGame);
        endBtn.addEventListener("click", restartGame);

        let restartBtn = document.createElement('button');
        board.forEach((row) => {
            let rowEle = document.createElement('div');
            rowEle.classList.add("rowContainer");
            row.forEach((piece) => {
                let pieceEle = document.createElement('div');
                pieceEle.textContent = piece;
                pieceEle.classList.add("pieceEle");
                rowEle.appendChild(pieceEle);
            })
            gameBoardEle.appendChild(rowEle);
        })
    }
    return { displayController };

})();

gameBoard.displayController();