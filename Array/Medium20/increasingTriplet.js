// . 334. Increasing Triplet Subsequence
function increasingTriplet(nums) {
    let first = Infinity;
    let second = Infinity;

    for (const num of nums) {
        if (num <= first) {
            first = num;
            console.log(first)
        } else if (num <= second) {
            second = num;
            console.log(second)
        } else {
            return true;
        }
    }
    return false;
}
// Input: nums = [1,2,3,4,5]
// Output: true
let nums = [20, 100, 10, 12, 5, 13]
// true
console.log(increasingTriplet(nums))