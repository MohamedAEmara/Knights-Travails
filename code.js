let vis = [];
let parent = new Map();

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

// console.log(moves);
function knightMoves(x1, y1, x2, y2) {

    // Define the valid moves of a knight
    

    parent = new Map();
    
    for(let i=0; i<8; i++) {
        vis[i] = [];
        for(let j=0; j<8; j++) {
            vis[i][j] = 0;
        }
    }
    
    let queue = [];
    
    queue.push([x1, y1, 0]);        // push the coordinates of the starting position & number of visited cells

    vis[x1][y1] = 1;

    let tmp = x1*10 + y1;           // This is like a code to convert the two values to a single value 
    parent.set(tmp, null);     // the first cell has no parent..

    while(queue.length > 0) {
        let [x, y, moves] = queue.shift();          // remove the front of the queue & store its data.

        // Check if the resulting cell is the target?
        if(x == x2 && y == y2) {   
            
            console.log('You can move from [' + x1 + "," + y1 + "] To [" + x2 + "," + y2 + "] in " + moves + " moves!");

            let steps = "";

            // steps = steps + ("[" + x1 + "," + y1 + "]");

            let cells = [];

            let parentX = x1, parentY = y1;
            
            cells.push([x2, y2]);
            while(x != parentX || y != parentY) {
                let tmp = x*10 + y;
                let value = parent.get(tmp);
                x = Math.floor(value/10);
                y = value - x * 10;
                cells.push([x,y]);                
            }
            
            for(let i=cells.length-1; i>=0; i --) {
                if(steps == "") {       // handle that there is no arrow before the first point.

                    steps = steps + "[" + cells[i][0] + "," + cells[i][1] + "] ";
                } else {
                    steps = steps + " => [" + cells[i][0] + "," + cells[i][1] + "] ";
                } 

            }
            console.log(steps);
            return ;
        }

        // Generate all vaild moves from the current cell..
        for(let i=0; i<8; i++) {
            let dx = delta[i][0];
            let dy = delta[i][1];

            const newX = x + dx;
            const newY = y + dy;
    
            if(newX >= 0 && newY >= 0 && newX < 8 && newY < 8 && vis[newX][newY] == 0) {
                let tmp = newX*10 + newY;
                let value = x*10 + y;
                parent.set(tmp, value);       // Set the prev cell as a parent of the new cell.

                queue.push([newX, newY, moves+1]);
                vis[newX][newY] = moves+2;
            }
        }


    }
    
}    


knightMoves(3, 3, 4, 3);       // 3
knightMoves(0, 0, 1, 2);       // 1
knightMoves(0, 0, 3, 3);       // 2
knightMoves(3, 3, 0, 0,);      // 2
