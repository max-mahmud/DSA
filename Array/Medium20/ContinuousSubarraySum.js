// ? 523. Continuous Subarray Sum
var checkSubarraySum = function (nums, k) {
    const n = nums.length;
    const remainderMap = new Map();
    remainderMap.set(0, -1);

    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        let reminder = sum % k;

        if (remainderMap.has(reminder)) {
            const prevIndex = remainderMap.get(reminder);
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            remainderMap.set(reminder, i);
        }
    }

    return false;
};


let nums = [5, 0, 0, 0], k = 3
// Output: true
console.log(checkSubarraySum(nums, k)) 