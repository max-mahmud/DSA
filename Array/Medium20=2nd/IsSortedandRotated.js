// . 1752. Check if Array Is Sorted and Rotated
//* only once can rotate baki sob false
var check = function (nums) {
    let n = nums.length;
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i - 1] > nums[i]) {
            count++
        }
    }
    if (nums[n - 1] > nums[0]) {
        count++
    }
    return count <= 1
};
console.log(check([5, 4, 3, 2, 1])); // Output should be false
console.log(check([1, 3, 2])); // Output should be false
console.log(check([4, 2, 1, 3])); // Output should be false
console.log(check([1, 2, 3, 4, 1])); // Output should be true
console.log(check([2, 2, 2, 2])); // Output should be true
console.log(check([])); // Output should be true
console.log(check([5])); // Output should be true
