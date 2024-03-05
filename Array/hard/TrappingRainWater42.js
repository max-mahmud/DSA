//? 42. Trapping Rain Water

function getLeftMax(height, n) {
  let leftMax = new Array(n).fill(0)
  leftMax[0] = height[0]
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }
  return leftMax
}
function getRigthMax(height, n) {
  let rigthMax = new Array(n).fill(0)
  rigthMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rigthMax[i] = Math.max(rigthMax[i + 1], height[i])
  }
  return rigthMax
}


function trap(height) {
  let n = height.length;
  if (n === 1 || n === 0) return 0;
  let leftMax = getLeftMax(height, n)
  let rightMax = getRigthMax(height, n)
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return sum
}
// Test cases
let height2 = [4, 2, 0, 3, 2, 5];
console.log(trap(height2)); // Output: 9