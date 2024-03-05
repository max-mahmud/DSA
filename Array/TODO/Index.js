//TODO 54. Spiral Matrix
// function spiralOrder(matrix) {
//     if (!matrix || matrix.length === 0) {
//         return [];
//     }

//     let result = [];
//     let rows = matrix.length;
//     let cols = matrix[0].length;
//     let top = 0, bottom = rows - 1,
//         left = 0, right = cols - 1;

//     while (top <= bottom && left <= right) {
//         // Traverse top row
//         for (let col = left; col <= right; col++) {
//             result.push(matrix[top][col]);
//         }
//         top++;

//         // Traverse right column
//         for (let row = top; row <= bottom; row++) {
//             result.push(matrix[row][right]);
//         }
//         right--;

//         // Traverse bottom row
//         if (top <= bottom) {
//             for (let col = right; col >= left; col--) {
//                 result.push(matrix[bottom][col]);
//             }
//             bottom--;
//         }

//         // Traverse left column
//         if (left <= right) {
//             for (let row = bottom; row >= top; row--) {
//                 result.push(matrix[row][left]);
//             }
//             left++;
//         }
//     }

//     return result;
// }

// // Test cases
// const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(spiralOrder(matrix1)); // Output: [1,2,3,6,9,8,7,4,5]

// const matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// console.log(spiralOrder(matrix2)); // Output: [1,2,3,4,8,12,11,10,9,5,6,7]
//TODO:  2007. Find Original Array From Doubled Array takes=330 ms , optimize this
// function findOriginalArray(changed) {
//     let len = changed.length;
//     if (len % 2 !== 0) return []
//     changed.sort((a, b) => a - b);
//     let counts = new Map()

//     for (const num of changed)
//         counts.set(num, (counts.get(num) || 0) + 1);

//     let original = []
//     for (const num of changed) {
//         const twice = 2 * num;
//         if (counts.get(num) === 0) {
//             continue;
//         }
//         if (!counts.has(twice) ) {
//             return [];
//         }

//         original.push(num);
//         counts.set(num, counts.get(num) - 1);
//         counts.set(twice, counts.get(twice) - 1);
//     }


//     return original
// }

// // Example usage:
// const changed1 = [1, 3, 4, 2, 6, 8];
// console.log(findOriginalArray(changed1)); // Output: [1,3,4] or [3,1,4] or [4,3,1]
