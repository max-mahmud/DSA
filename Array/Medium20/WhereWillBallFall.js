// ?  1706. Where Will the Ball Fall
var findBall = function (grid) {
    const m = grid.length; 
    const n = grid[0].length; 

    function simulateBall(col) {
        row = 0
        while (row < m) {
            if (grid[row][col] === 1) {
                if (col === n - 1 || grid[row][col + 1] === -1) {
                    return -1
                }
                col++
            } else {
                if (col === 0 || grid[row][col - 1] === 1) {
                    return -1
                }
                col--
            }
            row++
        }
        return col
    }

    let result = []
    for (let i = 0; i < n; i++) {
        result.push(simulateBall(i))
    }
    return result
};
Input: grid = [[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]]
// Output: [1,-1,-1,-1,-1]
console.log(findBall(grid))