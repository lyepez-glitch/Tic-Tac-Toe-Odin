import player from './player.js';
import updateValue from './updateValue.js';
import displayController from './displayController.js';
import gameController from './gameController.js';
const { startGame, restartGame } = gameController;
const gameBoard = (function() {
    let board = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ];
    let gameBoardEle = document.querySelector('#gameBoard');
    let startBtn = document.createElement('button');
    let playerTurn = 'Player1';
    let player1 = player("1", "X");
    let player2 = player("2", "O");
    let restartBtn = document.createElement('button');
    startBtn.addEventListener("click", function() { startGame(board, playerTurn, player1, player2) });
    restartBtn.addEventListener("click", function() { restartGame(board, playerTurn, player1, player2) });
    startBtn.textContent = "Start";
    restartBtn.textContent = "Start Over";
    gameBoardEle.appendChild(startBtn);
    gameBoardEle.appendChild(restartBtn);




    return { displayController, board, player };
})();


let turn = gameBoard.playerTurn;
let board = gameBoard.board;