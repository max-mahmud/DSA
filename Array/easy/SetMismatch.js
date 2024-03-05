// . 645. Set Mismatch
var findErrorNums = function (nums) {
    let freqMap = new Map()
    let n = nums.length
    for (let val of nums) {
        freqMap.set(val, (freqMap.get(val) || 0) + 1);
    }

    let duplicate, missing;
    for (let i = 1; i <= n; i++) {
        if (!freqMap.has(i)) {
            missing = i
        } else if (freqMap.get(i) > 1) {
            duplicate = i
        }
    }
    return [duplicate, missing]
};

let nums = [1, 2, 2, 4]
// Output: [2, 3]
console.log(findErrorNums(nums))