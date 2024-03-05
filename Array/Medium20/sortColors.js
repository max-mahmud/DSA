//? 75. Sort Colors
function sortColors(nums) {
    let red = 0; // 0 represents red
    let blue = nums.length - 1; // 2 represents blue

    let i = 0;
    while (i <= blue) {
        if (nums[i] === 0) {
            // Swap nums[i] with nums[red] and move red pointer right
            [nums[i], nums[red]] = [nums[red], nums[i]];
            red++;
            i++;
        } else if (nums[i] === 2) {
            // Swap nums[i] with nums[blue] and move blue pointer left
            [nums[i], nums[blue]] = [nums[blue], nums[i]];
            blue--;
        } else {
            // nums[i] is already 1, move i pointer right
            i++;
        }
    }
}

// Example usage:
// const nums1 = [2,0,2,1,1,0];
// sortColors(nums1);
// console.log(nums1);  // Output: [0,0,1,1,2,2]