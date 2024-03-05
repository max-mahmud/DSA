// ? 36. Valid Sudoku
var isValidSudoku = function (board) {
    const seen = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j]
            if (num !== '.') {
                let rowKey = `${num} found in row ${j} `
                let colKey = `${num} found in col ${i} `
                let boxKey = `${num} found in sub-box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false
                }
                seen.add(rowKey)
                seen.add(colKey)
                seen.add(boxKey)
            }
        }
    }
    return true;
};
let board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// Output: true
console.log(isValidSudoku(board))