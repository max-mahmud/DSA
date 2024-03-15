// == 899. Orderly Queue===
// var orderlyQueue = function (s, k) {
//     if (k > 1) {
//         // When k > 1, we can sort the string lexicographically
//         return s.split('').sort().join('');
//     } else {
//         let mainValue = s
//         for (let i = 1; i < s.length; i++) {
//             let rotateValue = s.substring(i) + s.substring(0, i)
//             if (rotateValue < mainValue) {
//                 mainValue = rotateValue
//             }
//         }
//         return mainValue
//     }
// };

// // Test cases
// console.log(orderlyQueue("cba", 1));  // Output: "acb"
// // console.log(orderlyQueue("baaca", 3));  // Output: "aaabc"