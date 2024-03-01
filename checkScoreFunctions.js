export const three_in_column = (marker, board, player) => {
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

export const three_in_row = (marker, board, player) => {
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

            result = true;
            player.addPoint();

        }
    }

    return result;
}


export const diagonalScore = (marker, board, player) => {
    let row1 = board[0];
    let row2 = board[1];
    let row3 = board[2];

    if (row1[0] === marker && row2[1] === marker && row3[2] === marker) {
        player.addPoint();
        return true;
    }
    return false;
}

export const reverseDiagonal = (marker, board, player) => {
    let row1 = board[0];
    let row2 = board[1];
    let row3 = board[2];
    if (row1[2] === marker && row2[1] === marker && row3[0] === marker) {
        player.addPoint();
        return true;
    }
    return false;
}