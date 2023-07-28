let vis = [];

// console.log(moves);
function knightMoves(x1, y1, x2, y2) {

    // Define the valid moves of a knight
    
    let delta = [    
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1]
    ];


    
    for(let i=0; i<8; i++) {
        vis[i] = [];
        for(let j=0; j<8; j++) {
            vis[i][j] = 0;
        }
    }
    
    let queue = [];
    
    queue.push([x1, y1, 0]);        // push the coordinates of the starting position & number of visited cells

    vis[x1][y1] = 1;


    while(queue.length > 0) {
        let [x, y, moves] = queue.shift();          // remove the front of the queue & store its data.

        // Check if the resulting cell is the target?
        if(x == x2 && y == y2) {                
            return moves;
        }

        // Generate all vaild moves from the current cell..
        for(let i=0; i<8; i++) {
            let dx = delta[i][0];
            let dy = delta[i][1];
            // console.log("dx = " + dx);
            // console.log("dy = " + dy);
            const newX = x + dx;
            const newY = y + dy;

            if(newX >= 0 && newY >= 0 && newX < 8 && newY < 8 && vis[newX][newY] == 0) {
                queue.push([newX, newY, moves+1]);
                vis[newX][newY] = moves+2;
            }
        }


    }


    
}    


console.log(knightMoves(3, 3, 4, 3));       // 3
for(let i=0; i<8; i++) {
    let line = "";
    for(let j=0; j<8; j++) {
        line = line + (vis[i][j]);
        line += " ";
    }
    console.log(line);
}

console.log(knightMoves(0, 0, 1, 2));       // 1
console.log(knightMoves(0, 0, 3, 3));       // 2
console.log(knightMoves(3, 3, 0, 0,));      // 2
