//? triangle pattern
// function pattern(n){
//     let result = ""
//     for(let i=0; i<n; i++){
//         for(let j=0; j<=i; j++){
//             result +="*"
//         }
//         result += "\n"
//     }
//     return result
// }
// console.log(pattern(5))

//? rectangle pattern==2
// let row = 5;
// let col = 4;
// let star = "";
// for (let i = 1; i <= row; i++) {
//   for (let j = 1; j <= col; j++) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);
//? rectangle pattern
// let row = 5;
// let col = 4;
// let star = "";
// for (let i = 1; i <= row; i++) {
//   for (let j = 1; j <= col; j++) {
//     if (i === 1 || i === row || j === 1 || j == col) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   star += "\n";
// }
// console.log(star);
// ?inverted half pyramid ==4
// let rows = 5;
// let pyramid = "";

// for (let i = rows; i > 0; i--) {
//   for (let j = 1; j <= i; j++) {
//     pyramid += "*";
//   }
//   pyramid += "\n";
// }

// console.log(pyramid);
