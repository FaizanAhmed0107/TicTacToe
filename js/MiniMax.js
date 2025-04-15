function isOver(grid) {
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] !== ' ' && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2])
            return 1;
        if (grid[0][i] !== ' ' && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i])
            return 1;
    }

    if (grid[0][0] !== ' ' && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2])
        return 1;
    if (grid[0][2] !== ' ' && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0])
        return 1;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] === ' ')
                return 0; // Game not over
        }
    }

    // Draw
    return -1;
}

export function getNext(grid, player, alpha, beta) {
    const over = isOver(grid);
    if (over === 1)
        return {'score': player === 0 ? -1 : 1}
    if (over === -1)
        return {'score': 0}

    let bestMove = null;

    if (player === 0) {  //Maximizing for 'X'
        let bestScore = -Infinity;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i][j] === ' ') {
                    grid[i][j] = 'X';
                    const move = getNext(grid, 1, alpha, beta);
                    grid[i][j] = ' ';

                    if (move.score > bestScore) {
                        bestScore = move.score;
                        bestMove = {'row': i, 'col': j, 'score': bestScore};
                    }

                    alpha = Math.max(alpha, bestScore);
                    if (beta <= alpha) {
                        return bestMove; // Prune
                    }
                }
            }
        }
    } else { // Minimizing for 'O'
        let bestScore = Infinity;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i][j] === ' ') {
                    grid[i][j] = 'O';
                    const move = getNext(grid, 0, alpha, beta);
                    grid[i][j] = ' ';

                    if (move.score < bestScore) {
                        bestScore = move.score;
                        bestMove = {'row': i, 'col': j, 'score': bestScore};
                    }

                    beta = Math.min(beta, bestScore);
                    if (beta <= alpha) {
                        return bestMove; // Prune
                    }
                }
            }
        }
    }

    return bestMove;
}


const playBox = [
    ['O', ' ', 'X'],
    [' ', 'X', ' '],
    ['O', ' ', 'X']
]

console.log(getNext(playBox, 1, -Infinity, Infinity))
