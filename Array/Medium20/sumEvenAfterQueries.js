//  ?  985. Sum of Even Numbers After Queries
var sumEvenAfterQueries = function (nums, queries) {
    let total = 0
    let result = []
    for (let val of nums) {
        if (val % 2 === 0) {
            total += val
        }
    }
    for (let [val, idx] of queries) {
        let originalValue = nums[idx]
        let updatedValue = originalValue + val

        if (originalValue % 2 === 0) {
            total -= originalValue
        }
        if (updatedValue % 2 === 0) {
            total += updatedValue
        }
        result.push(total)
        nums[idx] = updatedValue
    }
    return result

};

Input: nums = [1, 2, 3, 4], queries = [[1, 0], [-3, 1], [-4, 0], [2, 3]]
Output: [8, 6, 2, 4]
sumEvenAfterQueries(nums, queries)