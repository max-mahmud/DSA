// ? sort diagonal =1329
function diagonalSort(mat) {
    let r = mat.length
    let c = mat[0].length
    let mp = new Map()
    // Store diagonal elements
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let diff = i - j
            if (!mp.has(diff)) {
                mp.set(diff, [])
            }
            mp.get(diff).push(mat[i][j])
        }
    }
    // Sort them
    for (let values of mp.values()) {
        values.sort((a, b) => a - b)
    }
    // Now, put them back in sorted fashion
    for (let i = r - 1; i >= 0; i--) {
        for (let j = c - 1; j >= 0; j--) {
            let diff = i - j;
            mat[i][j] = mp.get(diff).pop()
        }
    }
    return mat
}

// Example usage:
const mat1 = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]];
console.log(diagonalSort(mat1));  // Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]