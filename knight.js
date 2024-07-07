let board = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7]];

function knightMoves(start, finish) {
    let availableMoves =   [[start[0] + 2, start[1] + 1],
                            [start[0] + 2, start[1] - 1]
                            [start[0] - 2, start[1] + 1]
                            [start[0] - 2, start[1] - 1]];

}