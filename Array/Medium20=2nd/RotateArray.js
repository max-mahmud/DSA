// ? 189. Rotate Array
var rotate = function (nums, k) {
    let n = nums.length;
    const reverse = (start, end) => {
        while (start < end) {
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
        }
    }
    k %= n
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5,6,7,1,2,3,4]
rotate(nums, k)
console.log(nums)