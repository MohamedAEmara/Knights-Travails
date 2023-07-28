


let vis = [];

for(let i=0; i<8; i++) {
    vis[i] = [];
    for(let j=0; j<8; j++) {
        vis[i][j] = false;
    }
}

// vis[0][0] = 1;
// vis[1][1] = 4;
// console.log(vis[1][1]);


function valid(x, y) {
    console.log(x + "    " + y);
    if(x >= 0 && y >= 0 && x < 8 && y < 8 && vis[x][y] === false) {
        console.log("trueeeeee");
        return true;
    }
    console.log("falseeeeeeeeeeee");
    return false;
}

/*
    -1 +2
    -1 -2
    +1 +2
    +1 -2
    -2 -1
    -2 +1
    +2 -1
    +2 +1

*/

function reset() {
    for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
            vis[i][j] = false;
        }
    }
}



function knightMoves(x1, y1, x2, y2) {
    if(x1 === x2 && y1 === y2) {
        return 0;
    }

    // console.log(x1 + "   " + y1);

    let ch1 = 1000000;
    let ch2 = 1000000;
    let ch3 = 1000000;
    let ch4 = 1000000;
    let ch5 = 1000000;
    let ch6 = 1000000;
    let ch7 = 1000000;
    let ch8 = 1000000;

    vis[x1][y1] = true;

    if(valid(x1-1, y1+2)) {
        ch1 = 1 + knightMoves(x1-1, y1+2, x2, y2);
    }
    if(valid(x1-1, y1-2)) {
        ch2 = 1 + knightMoves(x1-1, y1-2, x2, y2);
    }
    if(valid(x1+1, y1+2)) {
        ch3 = 1 + knightMoves(x1+1, y1+2, x2, y2);
    }
    if(valid(x1+1, y1-2)) {
        ch4 = 1 + knightMoves(x1+1, y1-2, x2, y2);
    }
    if(valid(x1-2, y1-1)) {
        ch5 = 1 + knightMoves(x1-2, y1-1, x2, y2);
    }
    if(valid(x1-2, y1+1)) {
        ch6 = 1 + knightMoves(x1-2, y1+1, x2, y2);
    }
    if(valid(x1+2, y1-1)) {
        ch7 = 1 + knightMoves(x1+2, y1-1, x2, y2);
    }
    if(valid(x1+2, y1+1)) {
        ch8 = 1 + knightMoves(x1+2, y1+1, x2, y2);
    }
    // console.log(Math.min(ch1, ch2, ch3, ch4));
    return Math.min(ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8);
}  

console.log(knightMoves(3, 3, 0, 0));
for(let i=0; i<8; i++) {
    for(let j=0; j<8; j++) {
        console.log(vis[i][j]);
    }
}

console.log(knightMoves(3, 3, 4, 3));
console.log(knightMoves(0, 0, 1, 2));
console.log(knightMoves(0, 0, 3, 3));
console.log(knightMoves(3, 3, 0, 0,));
// reset();
// reset();
reset();
reset();
