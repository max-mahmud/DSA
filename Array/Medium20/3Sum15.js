// ?15. 3Sum
var threeSum = function (nums) {
  let len = nums.length;
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len-2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;
    let target = nums[i];
    twoSum(nums, left, right, target, res);
  }
  return res;
};

function twoSum(nums, left, right, target, res) {
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === -target) {
      res.push([target, nums[left], nums[right]]);
      // Skip duplicates
      while (left < right && nums[left] === nums[left + 1]) left++;
      while (left < right && nums[right] === nums[right - 1]) right--;
      left++;
      right--;
    } else if (sum < -target) {
      left++;
    } else {
      right--;
    }
  }
}