// ? let search2DMatrix  74
var searchMatrix = function (matrix, target) {
    let col = matrix.length;
    let row = matrix[0].length;
    let start = 0
    let end = row * col - 1
    // take last =>4*3 =11
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let element = matrix[Math.floor(mid / col)][mid % col]
        if (element == target) {
            return true
        }
        if (element < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
};

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
// Output: true
let result = searchMatrix(matrix, target)
console.log(result)