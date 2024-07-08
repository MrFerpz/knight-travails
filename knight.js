// set-up board
let board = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7]
];

// make a node class to store coordinates and available 
class Node {
    constructor([x, y]) {
        this.x = x;
        this.y = y;
        this.availableMoves = 
            [
                [x + 2, y + 1],
                [x + 2, y - 1],
                [x + 1, y + 2],
                [x + 1, y - 2],
                [x - 2, y + 1],
                [x - 2, y - 1],
                [x - 1, y + 2],
                [x - 1, y - 2]
            ].filter(move => this.isValidMove(move));
    }

    isValidMove([x, y]) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
}

// function takes in start position and desired end position
function knightMoves(start, finish) {

    // initialise moveCount and queue
    let moveCount = 0;
    let queue = [];

    // make nodes for start square and finish square
    let startSquare = new Node(start);
    let finishSquare = new Node(finish);

    console.log(startSquare);
    console.log(startSquare.availableMoves)

    // make nodes for each available move
    for (let i = 0; i < startSquare.availableMoves.length; i++) {
        queue.push(new Node(startSquare.availableMoves[i]));
    }

    // handle the queue
    while (queue.length > 0) {
        for (let j = 0; j < queue.length; j++) {
            if ((queue[j].x === finishSquare.x) && (queue[j].y === finishSquare.y)) {
                console.log("you found it");
                return;
            }
        }
    }

    console.log(queue);
}

knightMoves([2,0],[4,1]);