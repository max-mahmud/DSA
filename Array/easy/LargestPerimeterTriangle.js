// . 976. Largest Perimeter Triangle
var largestPerimeter = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i >= 2; i--) {
        if (nums[i] < nums[i - 1] + nums[i - 2]) {
            return nums[i] + nums[i - 1] + nums[i - 2]
        }
    }
    return 0
};

let nums = [3, 6, 2, 3] // 8
// let nums = [3,2,3,4] // 10
// let nums = [1, 2, 1, 10] //0
console.log(largestPerimeter(nums))