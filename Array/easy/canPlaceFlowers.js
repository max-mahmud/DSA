// . 605. Can Place Flowers
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue;
        if ((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            count++
            i += 1
        }
    }
    return count >= n
};

// let flowerbed = [1, 0, 0, 0, 1], n = 1
// Output: true
let flowerbed = [1, 0, 0, 0, 0, 0, 1], n = 2
// Output: true
console.log(canPlaceFlowers(flowerbed, n))