// . 219. Contains Duplicate II
var containsNearbyDuplicate = function (nums, k) {
    let mp = new Map()
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (mp.has(num)) {
            if ((i - mp.get(nums[i]) <= k)) {
                return true;
            }
        }
        mp.set(num, i);
    }

    return false

};
let nums = [1, 2, 3, 1, 2, 3], k = 2
// Output: true
console.log(containsNearbyDuplicate(nums, k))