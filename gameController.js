import displayController from './displayController.js';
let gameBoardEle = document.querySelector('#gameBoard');
let startGame = (board, playerTurn, player1, player2) => {


    displayController(board, gameBoardEle, playerTurn, player1, player2);

}
let restartGame = (board, playerTurn, player1, player2) => {

    displayController(board, gameBoardEle, playerTurn, player1, player2);
}

export default { startGame, restartGame };