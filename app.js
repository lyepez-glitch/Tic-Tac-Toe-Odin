const gameBoard = (function() {
    let board = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ];
    let gameBoardEle = document.querySelector('#gameBoard'); //outer game board container

    let player = function(name, type) { //create players with scores and ability to addpoints and type marker
        let score = 0;
        let addPoint = () => score++;

        return { score, type, name, addPoint };
    }

    let player1 = player("1", "X"); //players x and o instantiated
    let player2 = player("2", "O");

    let playerTurn = 'Player1'; //flag for whose turn starting with player 1

    let displayController = function(board) {
        board = [
            ['0', '0', '0'],
            ['0', '0', '0'],
            ['0', '0', '0'] //reset game board
        ];
        let rowsToRemove = gameBoardEle.querySelectorAll(".rowContainer"); //remove vals from last game
        rowsToRemove.forEach((row) => row.remove());
        board.forEach((row, rowIndex) => {
            let rowEle = document.createElement('div'); //make new row
            rowEle.classList.add("rowContainer");
            row.forEach((piece, colIndex) => { //for each row
                let pieceEle = document.createElement('div'); //make ele for the pieces
                pieceEle.textContent = piece; //
                pieceEle.classList.add("pieceEle");
                pieceEle.addEventListener('click', function() { //add click handler for each piece to update val
                    updateVal(rowIndex, colIndex)
                    console.log("update val ", updateVal(rowIndex, colIndex))
                });
                let updateVal = (row, col) => { //enter update val function
                    console.log("playerTurn", playerTurn)
                    if (playerTurn == 'Player1') { //if it's player 1 turn
                        console.log('player1.type', player1.type)
                        pieceEle.textContent = player1.type; //set the pieces ele to player 1 marker placed
                        board[row][col] = player1.type; //update marker in board array too
                        playerTurn = 'Player2'; //change to player 2 turn
                    } else { //if it's player 2 turn
                        pieceEle.textContent = player2.type; //set the pieces ele to player 2 marker
                        board[row][col] = player2.type; //update marker in board array
                        playerTurn = 'Player1'; //change to player 1 turn
                    }
                    let checkScore = (marker, player) => { //func that handles all types of ways to determine winner
                        let three_in_column = (marker) => { //
                            let row1 = board[0]; //grab each row
                            let row2 = board[1];
                            let row3 = board[2];
                            for (let i = 0; i < 2; i++) {
                                let col1 = row1[i]; //iterate through the entire column of each row
                                let col2 = row2[i]; //if all three cols of the current row have the player marker inputted
                                //add point to player
                                //return true
                                //if none are found then false
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
                                row.forEach((piece) => { //for each row

                                    if (piece === marker) { //count all pieces matching marker
                                        count++;
                                    }

                                })
                                if (count === 2) { //if three pieces are counted
                                    console.log("count === 2 ", count === 2)
                                    result = true; //add point and true
                                    player.addPoint();

                                }
                            }
                            console.log("result", result) //else false
                            return result;
                        }

                        let diagonalScore = (marker) => {
                            let row1 = board[0];
                            let row2 = board[1];
                            let row3 = board[2];
                            //check if diagonal then addpoint and true
                            //else false
                            if (row1[0] === marker && row2[1] === marker && row3[2] === marker) {
                                player.addPoint();
                                return true;
                            }
                            return false;
                        }

                        let reverseDiagonal = (marker) => {
                            let row1 = board[0];
                            let row2 = board[1];
                            let row3 = board[2]; //check reverse diagonal and addpoint
                            if (row1[2] === marker && row2[1] === marker && row3[0] === marker) {
                                player.addPoint();
                                return true;
                            }
                            return false;
                        }

                        //if the player marker is all three vertically, horizontally,diagonally,or reverse diagonally
                        if (three_in_column(marker) || three_in_row(marker) || diagonalScore(marker) || reverseDiagonal(marker)) {
                            return true; //return true
                        } else {
                            return false; //else false
                        }
                    }
                    console.log("checking board ", board);
                    let player1finalScore = checkScore(player1.type, player1); //check if player1 or player 2 has won
                    let player2finalScore = checkScore(player2.type, player2);
                    console.log("player1finalScore", player1finalScore)
                    console.log("player2finalScore", player2finalScore)
                    if (player1finalScore) { //if true for player 1

                        return `${player1.name} is the winner!`; //player 1 wins
                    } else if (player2finalScore) { //if true for player 2
                        return `${player2.name} is the winner!`; //player 2 wins
                    } else if (player1.score === player2.score) { //if both scores of players are equal then tie
                        return "It's a tie!";
                    }
                }
                rowEle.appendChild(pieceEle); //add each of three pieces to row ele
                gameBoardEle.appendChild(rowEle); //add row ele to the dom gameboard
            })


        })
    }
    let startGame = () => {
        console.log("start game");
        displayController(board); // start the game by populating the board, setting click events to determine winner
    }
    let restartGame = () => {
        //does the same as start game
        displayController(board);
    }

    let startBtn = document.createElement('button');
    let restartBtn = document.createElement('button');
    startBtn.addEventListener("click", startGame);
    restartBtn.addEventListener("click", restartGame);
    startBtn.textContent = "Start";
    restartBtn.textContent = "Start Over"; //make start and restart buttons for the dom board
    gameBoardEle.appendChild(startBtn);
    gameBoardEle.appendChild(restartBtn);


    return { displayController, board, player }; //returns displayControlle func, board array, player constructor
})();


let turn = gameBoard.playerTurn; //player 1 or 2 flag
let board = gameBoard.board; //board array