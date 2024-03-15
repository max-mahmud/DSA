// ?   1207. Unique Number of Occurrences
var uniqueOccurrences = function (arr) {
    const frequencyMap = {};

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    const occurrenceCounts = {};
    for (const key in frequencyMap) {
        const count = frequencyMap[key];
        if (occurrenceCounts[count]) {
            return false
        } else {
            occurrenceCounts[count] = 1;
        }
    }

    return true;
};

// Test cases
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Output: true
console.log(uniqueOccurrences([1, 2])); // Output: false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // Output: true