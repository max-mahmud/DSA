// . 28. Find the Index of the First Occurrence in a String
//=
//! Knuth-Morris-Pratt (KMP) algorithm then again solve it
// var strStr = function (haystack, needle) {
//     if (!needle.length) return 0;
//     if (!haystack.includes(needle)) return -1;
//     return haystack.split(`${needle}`)[0].length;
// };
// ** second aproach
// var strStr = function (haystack, needle) {
//     const haystackLength = haystack.length;
//     const needleLength = needle.length;
//     for (let i = 0; i < haystackLength; i++) {
//         let j;
//         for (j = 0; j < needleLength; j++) {
//             if (haystack[i + j] !== needle[j]) {
//                 break;
//             }
//         }
//         if (j === needleLength) {
//             return i
//         }

//     }
//     return -1
// }

// Test cases
// console.log(strStr("sadbutsad", "sad")); // Output: 0
// console.log(strStr("leetcode", "leeto")); // Output: -1