// . 2348. Number of Zero-Filled Subarrays
var zeroFilledSubarray = function (nums) {
    let zeroCount = 0
    let count = 0
    for (let num of nums) {
        if (num === 0) {
            zeroCount++
        } else {
            count += (zeroCount * (zeroCount + 1)) / 2
            zeroCount = 0
        }
    }
    if (zeroCount > 0) {
        count += (zeroCount * (zeroCount + 1)) / 2
    }
    return count
};

let nums = [0, 0, 0, 2, 0, 0]
Output: 9
console.log(zeroFilledSubarray(nums))