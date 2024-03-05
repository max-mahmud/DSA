// ? Two Sum
var twoSum = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1

    while (left < right) {
        let sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [left+1, right+1]
        } else if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        }
    }
    return []
};

let numbers = [2, 7, 11, 15], target = 9
// // Output: [1,2]
// console.log(twoSum(numbers, target))