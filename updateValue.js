import { three_in_column, three_in_row, diagonalScore, reverseDiagonal } from './checkScoreFunctions.js';


const updateVal = (row, col, pieceEle, playerTurn, player1, player2, board) => {
    console.log("playerTurn", playerTurn)
    if (playerTurn == 'Player1') {

        pieceEle.textContent = player1.type;

        board[row][col] = player1.type;
        playerTurn = 'Player2';
    } else {

        pieceEle.textContent = player2.type;
        board[row][col] = player2.type;
        playerTurn = 'Player1';
    }
    let checkScore = (marker, player) => {



        if (three_in_row(marker, board, player)) {
            return true;
        } else {
            return false;
        }
    }

    let player1finalScore = checkScore(player1.type, player1);
    let player2finalScore = checkScore(player2.type, player2);

    // if (player1finalScore) {   put this somewhere else

    //     return `${player1.name} is the winner!`;
    // } else if (player2finalScore) {
    //     return `${player2.name} is the winner!`;
    // } else if (player1.score === player2.score) {
    //     return "It's a tie!";
    // }
    return { playerTurn }
}

export default updateVal;