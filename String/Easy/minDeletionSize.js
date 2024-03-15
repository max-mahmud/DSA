// .  944. Delete Columns to Make Sorted
//=
var minDeletionSize = function (strs) {
    // Initialize a counter to keep track of the number of columns to delete
    let deleteCount = 0;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] < strs[j - 1][i]) {
                deleteCount++;
                break;
            }
        }
    }
    return deleteCount
}

// Test cases
console.log(minDeletionSize(["cba", "daf", "ghi"])); // Output: 1
console.log(minDeletionSize(["a", "b"])); // Output: 0
console.log(minDeletionSize(["zyx", "wvu", "tsr"])); // Output: 3