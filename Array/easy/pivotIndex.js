// . 724. Find Pivot Index
function pivotIndex(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - nums[i] - leftSum) {
            return i
        }
        leftSum += nums[i]
    }
    return -1;
}

let nums = [1, 7, 3, 6, 5, 6]
Output: 3
console.log(pivotIndex(nums))