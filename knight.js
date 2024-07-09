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

    function moveCheck(availMovesList) {
    // make nodes for each available move
    for (let i = 0; i < availMovesList.length; i++) {
        // add them to the queue and immediately check them
        queue.push(new Node(availMovesList[i]));
        handleQueue();
    }
}

// handle the queue
function handleQueue() {
    let current = queue.shift();
    if ((current.x === finishSquare.x) && (current.y === finishSquare.y)) {
        console.log("you found it");
        return;
    }
}
    moveCheck(startSquare.availableMoves);
    moveCount++;
}

    
    // now I just need a way to keep topping up the queue until it's found
    // then I need to find the number of moves
    // then I need to console log it in a nice way with the route and the number


knightMoves([2,0],[0,1]);