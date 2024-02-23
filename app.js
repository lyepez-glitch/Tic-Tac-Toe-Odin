const gameBoard = (function() {
    let board = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ];
    let gameBoardEle = document.querySelector('#gameBoard');

    let player = function(name, type) {
        let score = 0;
        let addPoint = () => score++;

        return { score, type, name, addPoint };
    }
    let player1 = player("1", "X");
    let player2 = player("2", "O");

    let playerTurn = 'Player1';

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
                pieceEle.textContent = piece;
                pieceEle.classList.add("pieceEle");
                pieceEle.addEventListener('click', function() {
                    updateVal(rowIndex, colIndex)
                    console.log("update val ", updateVal(rowIndex, colIndex))
                });
                let updateVal = (row, col) => {
                    console.log("playerTurn", playerTurn)
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
                    let checkScore = (marker, player) => {
                        let three_in_column = (marker) => {
                            let row1 = board[0];
                            let row2 = board[1];
                            let row3 = board[2];
                            for (let i = 0; i < 2; i++) {
                                let col1 = row1[i];
                                let col2 = row2[i];
                                let col3 = row3[i];
                                if (col1 === marker && col2 === marker && col3 === marker) {
                                    player.addPoint();
                                    return true;
                                }

                            }
                            return false;
                        }

                        let three_in_row = (marker) => {
                            let row1 = board[0];
                            let row2 = board[1];
                            let row3 = board[2];
                            let result = false;


                            for (let i = 0; i < 2; i++) {
                                let row = board[i];
                                let count = 0;
                                row.forEach((piece) => {

                                    if (piece === marker) {
                                        count++;
                                    }

                                })
                                if (count === 2) {
                                    console.log("count === 2 ", count === 2)
                                    result = true;
                                    player.addPoint();

                                }
                            }
                            console.log("result", result)
                            return result;
                        }

                        let diagonalScore = (marker) => {
                            let row1 = board[0];
                            let row2 = board[1];
                            let row3 = board[2];
                            if (row1[0] === marker && row2[1] === marker && row3[2] === marker) {
                                player.addPoint();
                                return true;
                            }
                            return false;
                        }

                        let reverseDiagonal = (marker) => {
                            let row1 = board[0];
                            let row2 = board[1];
                            let row3 = board[2];
                            if (row1[2] === marker && row2[1] === marker && row3[0] === marker) {
                                player.addPoint();
                                return true;
                            }
                            return false;
                        }

                        if (three_in_column(marker) || three_in_row(marker) || diagonalScore(marker) || reverseDiagonal(marker)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    console.log("checking board ", board);
                    let player1finalScore = checkScore(player1.type, player1);
                    let player2finalScore = checkScore(player2.type, player2);
                    console.log("player1finalScore", player1finalScore)
                    console.log("player2finalScore", player2finalScore)
                    if (player1finalScore) {

                        return `${player1.name} is the winner!`;
                    } else if (player2finalScore) {
                        return `${player2.name} is the winner!`;
                    } else if (player1.score === player2.score) {
                        return "It's a tie!";
                    }
                }
                rowEle.appendChild(pieceEle);
                gameBoardEle.appendChild(rowEle);
            })


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


    return { displayController, board, player };
})();


let turn = gameBoard.playerTurn;
let board = gameBoard.board;