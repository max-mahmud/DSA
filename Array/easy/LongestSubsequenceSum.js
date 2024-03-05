// . 2389. Longest Subsequence With Limited Sum == importent
//====* 1st aproach 
// function answerQueries(nums, queries) {
//     nums.sort((a, b) => a - b)
//     let n = nums.length;
//     let result = []
//     for (let q of queries) {
//         let sum = 0;
//         let j = 0;

//         while (j < n) {
//             sum += nums[j]
//             if (sum > q) {
//                 result.push(j)
//                 break
//             }
//             j++
//         }
//         if (j === n) {
//             result.push(n)
//         }
//     }

//     return result;
// }
//========****2nd aproach using Binary search****==================
// function answerQueries(nums, queries) {
//     nums.sort((a, b) => a - b);
//     const n = nums.length; 
//     const result = []; 

//     function binarySearch(target, nums) {
//         let left = 0; 
//         let right = n - 1;
//         let ans = -1;

//         while (left <= right) {
//             const mid = Math.floor((left + right) / 2); 
//             if (nums[mid] <= target) {
//                 ans = mid;
//                 left = mid + 1; 
//             } else {
//                 right = mid - 1;
//             }
//         }

//         return ans; // Return maximum index with sum <= target
//     }
//     const prefixSums = []; // Array to store prefix sums
//     let sum = 0;
//     for (const num of nums) {
//         sum += num;
//         prefixSums.push(sum);
//     }

//     for (const query of queries) {
//         // Find maximum index with sum <= query using binary search
//         const idx = binarySearch(query,prefixSums);
//         result.push(idx + 1); // Push index + 1 (to account for 0-based indexing)
//     }

//     return result; 
// }

// const nums = [4, 5, 2, 1];
// const queries = [3, 10, 21];
// console.log(answerQueries(nums, queries)); // Output: [2, 3, 4]



// const nums2 = [2, 3, 4, 5];
// const queries2 = [1];
// console.log(answerQueries(nums2, queries2)); // Output: [0]