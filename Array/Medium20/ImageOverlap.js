// ?  835. Image Overlap
function largestOverlap(img1, img2) {
    function CountOverLap(shiftX, shiftY, img1, img2) {
        const n = img1.length;
        let count = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i + shiftX >= 0 && i + shiftX < n && j + shiftY >= 0 && j + shiftY < n) {
                    count += img1[i + shiftX][j + shiftY] && img2[i][j];
                }
            }
        }
        return count
    }

    let maxOverlap = 0;
    const n = img1.length;
    for (let shiftX = -n + 1; shiftX < n; shiftX++) {
        for (let shiftY = -n + 1; shiftY < n; shiftY++) {
            maxOverlap = Math.max(maxOverlap, CountOverLap(shiftX, shiftY, img1, img2))
        }
    }
    return maxOverlap
}

// Example usage:
const img1 = [[1,1,0],[0,1,0],[0,1,0]]
const img2 = [[0, 0, 0], [0, 1, 1], [0, 0, 1]];
console.log(largestOverlap(img1, img2)); // Output: 3