

function func(x1, y1, x2, y2) {
    let queue = [];

    let parent = new Map();

    let vis = [];

    for(let i=0; i<8; ++i) {
        vis[i] = [];
        for(let j=0; j<8; j++) {
            vis[i][j] = 0;
        }
    }

    queue.push([x1, y1]);
    parent.set([x1, y1], null);     // first cell has no parent.
    vis[x1][y1] = 1;

    while(queue.length > 0) {
        let cell = queue[0];
        if(cell[0] == x2 && cell[1] == y2) {
            let path = [x2, y2];
            let px = x2;
            let py = y2;
            while(px != x1 || py != y1) {
                pos = parent.get(pos);
                if(pos != null) {
                    path.unshift(pos);
                }
            }
        }
    }
    
}