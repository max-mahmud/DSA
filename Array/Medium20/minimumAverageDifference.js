// ? 2256. Minimum Average Difference
//====**** 1st aproach 
// var minAvgDifference = function(nums) {
//     let minDiff = Infinity;
//     let minIndex = 0;
//     const n = nums.length;

//     for (let i = 0; i < n; i++) {
//         let leftSum = 0;
//         for (let j = 0; j <= i; j++) {
//             leftSum += nums[j];
//         }
//         let rightSum = 0;
//         for (let j = i + 1; j < n; j++) {
//             rightSum += nums[j];
//         }

//         const leftAvg = Math.floor(leftSum / (i + 1));
//         const rightAvg = Math.floor(rightSum / (n - i - 1));
//         const diff = Math.abs(leftAvg - rightAvg);

//         if (diff < minDiff || (diff === minDiff && i < minIndex)) {
//             minDiff = diff;
//             minIndex = i;
//         }
//     }

//     return minIndex;
// };

// // Example usage:
// const nums1 = [2, 5, 3, 9, 5, 3];
// console.log(minAvgDifference(nums1)); // Output: 3

// const nums2 = [0];
// console.log(minAvgDifference(nums2)); // Output: 0

// ========***2nd Aproach***=========
var minimumAverageDifference = function (nums) {
    const n = nums.length;
    let LS = 0;
    let RS = 0;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    let result = Infinity
    let Idx = -1;
    for (let i = 0; i < n; i++) {
        LS += nums[i];
        RS = sum - LS;

        let n1 = i + 1;
        let n2 = n - n1;

        let leftAvg = Math.floor(LS / n1);
        const rightAvg = (i === n - 1) ? 0 : Math.floor(RS / n2);
        let diff = Math.abs(leftAvg - rightAvg);

        if (result > diff) {
            result = diff;
            Idx = i;
        }
    }
    return Idx;
};
Input: nums = [2, 5, 3, 9, 5, 3]
Output: 3
console.log(minimumAverageDifference(nums))