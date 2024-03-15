// ? 880. Decoded String at Index
// function decodeAtIndex(s, k) {
//     let size = 0;

//     for (let char of s) {
//         if (char >= "2" && char <= "9") {
//             // If current character is a digit
//             size *= parseInt(char)
//         } else {
//             size++
//         }
//     }

//     for (let i = s.length - 1; i >= 0; i--) {
//         k = k % size
//         if (k === 0 && (s[i] < "0" || s[i] > "9")) {
//             // If current character is a letter
//             return s[i]
//         }

//         if (s[i] >= "2" && s[i] <= "9") {
//             size = Math.ceil(size / parseInt(s[i]))
//             // Use ceil to ensure size is non-zero
//         } else {
//             size--
//         }
//     }
// }

// Example usage:
// console.log(decodeAtIndex("leet2code3", 10));  // Output: "o"
// console.log(decodeAtIndex("ha22", 5));         // Output: "h"
// console.log(decodeAtIndex("a2345678999999999999999", 1));  // Output: "a"