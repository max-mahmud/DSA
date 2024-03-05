//? pyramid pattern of asterisks
function generatePyramid(rows) {
  let result = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
      result += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      result += "#";
    }
    result += "\n";
  }
  return result;
}

const pyramid = generatePyramid(5);
console.log(pyramid);