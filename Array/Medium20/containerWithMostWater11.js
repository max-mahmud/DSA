//? 11 container with moast water

var maxArea = function (height) {
    let maxSum = 0
    let n = height.length
    let i = 0
    let j = n - 1
    while (i < j) {
        let w = j - i;
        let h = Math.min(height[i], height[j]);
        let area = h * w;
        maxSum = Math.max(maxSum, area)
        if (height[i] < height[j])
            i++;
        else
            j--;
    }
    return maxSum
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49
console.log(maxArea(height))