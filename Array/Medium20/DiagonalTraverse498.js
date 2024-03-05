//?  498. Diagonal Traverse
var findDiagonalOrder = function (mat) {
    let r = mat.length
    let c = mat[0].length
    let mp = new Map()
    let result = []
    // Store diagonal elements
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let plus = i + j;
            if (!mp.has(plus)) {
                mp.set(plus, [])
            }
            mp.get(plus).push(mat[i][j])
        }
    }
    let flip = true
    for (let values of mp.values()) {
        if (flip) {
            values.reverse()
        }
        result.push(...values)
        flip = !flip
    }
    return result
};

let mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output:[1,  2,4, 7,5,3  ,6,8,  9]
let result = findDiagonalOrder(mat)
console.log(result)