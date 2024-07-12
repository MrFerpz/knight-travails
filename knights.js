let board = [[0, 1, 2, 3, 4, 5, 6, 7],
            [0, 1, 2, 3, 4, 5, 6, 7],
            [0, 1, 2, 3, 4, 5, 6, 7],
            [0, 1, 2, 3, 4, 5, 6, 7],
            [0, 1, 2, 3, 4, 5, 6, 7],
            [0, 1, 2, 3, 4, 5, 6, 7],
            [0, 1, 2, 3, 4, 5, 6, 7],
            [0, 1, 2, 3, 4, 5, 6, 7]]


class Node {
    constructor([x, y]) {
        this.x = x;
        this.y = y;
        this.availableMoves = [[x + 2, y + 1],
                                [x + 2, y - 1],
                                [x + 1, y + 2],
                                [x + 1, y - 2],
                                [x - 2, y + 1],
                                [x - 2, y - 1],
                                [x - 1, y + 2],
                                [x - 1, y - 2]].filter((position) => (position[0] < 8) && (position[1] < 8) && (position[0] >= 0) && (position[1] >= 0));
    }
}

function knightMoves(starting, finish) {
    // function that takes in where you want to start and finish

    // makes nodes for the start and end squares
    let startSquare = new Node(starting);
    let finishSquare = new Node(finish);

    let movesList = [];

    // build a tree of depth 6
    function makeTree(square, depth = 0) {
    
        // set the exit condition
        if (depth === 6) {
            return
        }

        if (square === null) {
            return
        }

        // turn the co-ordinates into a Node with availableMoves
        let position = new Node(square);

        for (let i = 0; i < position.availableMoves.length; i++) {
            if (position !== null) {
            movesList.push(new Node(position.availableMoves[i]));
            makeTree(position.availableMoves[i], depth + 1);
        }}
        }

        makeTree([startSquare.x, startSquare.y]);
        console.log(movesList);
        return movesList;
    }



let test = new Node([7,0]);
console.log(test);

knightMoves([7,0],[4,3]);