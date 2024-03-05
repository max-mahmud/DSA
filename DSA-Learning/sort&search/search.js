//? binary search
// let data = [2, 5, 7, 9, 11, 25, 65, 67];
// let start = 0;
// let end = data.length - 1;
// let position = undefined;
// let find = 7;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);
//   if (data[mid] === find) {
//     position = mid;
//     break;
//   } else if (data[mid] < find) {
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }
// console.log(position);