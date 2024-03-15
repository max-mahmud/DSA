// . 859. Buddy Strings
//=
// var buddyStrings = function (s, goal) {
//     if (s.length !== goal.length) return false

//     if (s === goal) {
//         let count = new Set(s).size
//         return count < s.length
//     }

//     let different = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== goal[i]) {
//             different.push(i);
//         }
//     }
//     if (different.length !== 2) return false

//     return s[different[1]] === goal[different[0]] && s[different[0]] === goal[different[1]]

// };
// let s = "aa", goal = "aa"
// buddyStrings(s, goal)