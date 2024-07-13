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
    constructor([x, y], moveCount = 0, path = [[x, y]]) {
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
        this.moveCount = moveCount;
        this.path = path;
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

    // quick check everything works
    console.log(startSquare);
    console.log(startSquare.availableMoves)

    function moveCheck(movesList) {
    // make nodes for each available move
    for (let i = 0; i < movesList.length; i++) {
        // add them to the queue
        queue.push(new Node(movesList[i], 1, [start,` ${movesList[i]}`]));
    }

    // each round
    handleQueue();

    // if the final square is found, return the amount of moves taken
    if (handleQueue()) {
        return true;
            }
        }

// handle the queue
function handleQueue() {
    while (queue.length > 0) {
    let current = queue.shift();
    // check if it matches the finish square
    if ((current.x === finishSquare.x) && (current.y === finishSquare.y)) {
        console.log(`You found it in ${current.moveCount} moves!`);
        console.log(`Here is your path: ${current.path}`);
        return true;
    } else {
        for (let i = 0; i < current.availableMoves.length; i++) {
        queue.push(new Node(current.availableMoves[i], current.moveCount + 1, current.path.concat(` ${current.availableMoves[i]}`)));
    }
}
}
return false;
}
    moveCheck(startSquare.availableMoves);
}
    
    // now I just need a way to keep topping up the queue until it's found // tick
    // then I need to find the number of moves
    // then I need to console log it in a nice way with the route and the number


knightMoves([2,0],[7,0]);