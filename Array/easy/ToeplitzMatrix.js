// .  766. Toeplitz Matrix
var isToeplitzMatrix = function (matrix) {
    let m = matrix.length - 1;
    let n = matrix[0].length - 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false
            }
        }
    }
    return true
};
let matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]
// Output: true
isToeplitzMatrix(matrix)