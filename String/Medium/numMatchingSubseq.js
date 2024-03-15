// ? 792. Number of Matching Subsequences  (792 and 392 is same like easy and hard)
// var numMatchingSubseq = function (s, words) {
//     let count = 0;

//     function isSubsequence(word, s) {
//         let index = -1;
//         for (const char of word) {
//             index = s.indexOf(char, index + 1);
//             //index+1=>avoid re-searching characters that we've already processed in previous iterations.
//             if (index === -1) return false;
//         }
//         return true;
//     }

//     for (const word of words) {
//         if (isSubsequence(word, s)) {
//             count++;
//         }
//     }

//     return count;
// };
// // Example usage:
// const s1 = "abcde";
// const words1 = ["a", "bb", "acd", "ace"];
// console.log(numMatchingSubsequences(s1, words1));  // Output: 3

// const s2 = "dsahjpjauf";
// const words2 = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];

// console.log(numMatchingSubsequences(s2, words2));  // Output: 2