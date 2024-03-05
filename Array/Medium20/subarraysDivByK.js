// =  974. Subarray Sums Divisible by K
function subarraysDivByK(nums, k) {
    let count = 0;
    let prefixCount = { 0: 1 };
    let sum = 0
    for (let num of nums) {
        sum += num
        let reminder = sum % k;
        if (reminder < 0) reminder += k;
        if (prefixCount[reminder]) {
            count += prefixCount[reminder]
        }
        prefixCount[reminder] = (prefixCount[reminder] || 0) + 1
    }
    return count;
}

// Example cases
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)); // Output: 7
console.log(subarraysDivByK([5], 9));            // Output: 0