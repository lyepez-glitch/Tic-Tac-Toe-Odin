//all funcs should be in game, player, or gameboard objects
//get a working game
//check when game is over
//3 in a row and ties

//make func to click on board square to place 'x' or 'o'
//if spot is already taken don't let them take it


//display element that shows results of game at end

let gameBoard = (function() {
    let board = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ];


    let gameBoardEle = document.querySelector('#gameBoard');

    let player = function(name, type) {
        let score = 0;

        return { score, type, name };
    }

    let playerTurn = 'Player2';

    let displayController = function(board) {
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
                let updateVal = (row, col) => {
                    console.log("update val", row, col)
                    if (playerTurn == 'Player1') {
                        console.log('player1.type', player1.type)
                        pieceEle.textContent = player1.type;
                        board[row][col] = player1.type;
                        playerTurn = 'Player2';
                    } else {
                        pieceEle.textContent = player2.type;
                        board[row][col] = player2.type;
                        playerTurn = 'Player1';
                    }
                    let checkScore = () => {
                        /*
                          0,0  0,1  0,2
                          1,0  1,1  1,2
                          2,0  2,1  2,2


                         1. three in a col:


                          for each row 0,1,2

                          if val row index 0 col index 0
                          if val at row index 1 col index 0
                          if val at row index 2 col index 0

                          is x or o

                          if val row index 0 col index 1
                          if val at row index 1 col index 1
                          if val at row index 2 col index 1

                          is x or o

                          if val row index 0 col index 2
                          if val at row index 1 col index 2
                          if val at row index 2 col index 2

                          is x or 0

                         2. three diagonal

                            for each row 0,1,2
                            if val at row index 0 and col index 0 is x or 0
                            if row at row index 1 and col index 1 is x or 0

                            if val at row index 2 and col index  2 is x or o

                          3. three diagonal reverse
                            for each row 0,1,2
                            if val at row index 2, col index 2 is x or 0
                            if val at row index  1, col index 1 is x or o
                            if val at row index 0,col index 0 is x or o

                          4. three in a row
                            for each row
                              if all three cols equal x or o

                        */
                        console.log("board", board);
                        board.forEach((row) => {
                            row.forEach((col) => {
                                let val = board[row][col];
                                console.log("val ", val)
                            })
                        })
                    }
                    checkScore(board);
                }

                pieceEle.textContent = piece;
                pieceEle.classList.add("pieceEle");
                pieceEle.addEventListener('click', function() {
                    updateVal(rowIndex, colIndex)
                });

                rowEle.appendChild(pieceEle);
            })
            gameBoardEle.appendChild(rowEle);
        })
    }
    let startGame = () => {
        console.log("start game");
        displayController(board);
    }
    let restartGame = () => {

        displayController(board);
    }
    let startBtn = document.createElement('button');
    let restartBtn = document.createElement('button');
    startBtn.addEventListener("click", startGame);
    restartBtn.addEventListener("click", restartGame);
    startBtn.textContent = "Start";
    restartBtn.textContent = "Start Over";
    gameBoardEle.appendChild(startBtn);
    gameBoardEle.appendChild(restartBtn);
    let player1 = player("1", "X");
    let player2 = player("2", "O");

    return { displayController, board, player };

})();
let turn = gameBoard.playerTurn;
let board = gameBoard.board;


//gameBoard.displayController(board);