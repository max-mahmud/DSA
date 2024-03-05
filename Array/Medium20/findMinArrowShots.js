// ? 452. Minimum Number of Arrows to Burst Balloons
function findMinArrowShots(points) {
    if (points.length === 0) return 0;
    points.sort((a, b) => a[1] - b[1])
    let arrows = 1;
    let end = points[0][1];

    for (let i = 0; i < points.length; i++) {
        let [start, currentEnd] = points[i]

        if (start > end) {
            arrows += 1
            end = currentEnd
        }
    }

    return arrows;
}

// Example usage:
const points1 = [[10, 16], [2, 8], [1, 6], [7, 12]];
console.log(findMinArrowShots(points1)); // Output: 2

const points2 = [[1, 2], [3, 4], [5, 6], [7, 8]];
console.log(findMinArrowShots(points2)); // Output: 4

const points3 = [[1, 2], [2, 3], [3, 4], [4, 5]];
console.log(findMinArrowShots(points3)); // Output: 2