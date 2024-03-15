// . 844. Backspace String Compare
// function backspaceCompare(s, t) {
//     return buildString(s) === buildString(t);
// }

// function buildString(str) {
//     const stack = [];
//     for (const char of str) {
//         if (char !== '#') {
//             stack.push(char);
//         } else if (stack.length > 0) {
//             stack.pop();
//         }
//     }
//     return stack.join('');
// }

// // Example usage:
// console.log(backspaceCompare("ab#c", "ad#c")); // Output: true
// console.log(backspaceCompare("ab##", "c#d#")); // Output: true
// console.log(backspaceCompare("a#c", "b"));     // Output: false