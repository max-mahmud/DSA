// ? 997. Find the Town Judge
var findJudge = function (n, trust) {
    if (n === 1) return 1
    const count = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        count[a]--;
        count[b]++;
    }
    for (let i = 0; i < n + 1; i++) {
        if (count[i] === n - 1) {
            return i
        }
    }
    return -1

};
// Example cases
console.log(findJudge(2, [[1, 2]]));        // Output: 2
console.log(findJudge(3, [[1, 3], [2, 3]])); // Output: 3
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]])); // Output: -1
console.log(findJudge(1, [])); // Output: 1