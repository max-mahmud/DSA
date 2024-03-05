//? 16. 3Sum Closest.............
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let len = nums.length;
  let closet = 10000;
  for (let i = 0; i <= len - 2; i++) {
    let k = i + 1;
    let m = len - 1
    while (k < m) {
      let sum = nums[i] + nums[k] + nums[m]
      if (Math.abs(target - sum) < Math.abs(target - closet)) {
        closet = sum
      }
      if (sum < target) {
        k++
      } else {
        m--
      }
    }
  }
  return closet
};
//[1,2,3,4]
let nums = [-1, 2, 1, -4], target = 1
// Output: 2
console.log(threeSumClosest(nums, target))