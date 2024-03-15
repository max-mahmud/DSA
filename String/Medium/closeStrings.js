// ? 1657. Determine if Two Strings Are Close
var closeStrings = function (word1, word2) {
    const CheckMap = (word) => {
        let frequency = new Map()
        for (let char of word) {
            frequency.set(char, (frequency.get(char) || 0) + 1);
        }
        return frequency
    }

    let freqWord1 = CheckMap(word1)
    let freqWord2 = CheckMap(word2)
    if (freqWord1.size !== freqWord2.size || ![...freqWord1.keys()].every((c) => freqWord2.has(c))) {
        return false
    }

    let freqValues1 = [...freqWord1.values()].sort((a, b) => a - b).join('')
    let freqValues2 = [...freqWord2.values()].sort((a, b) => a - b).join('')
    return freqValues1 === freqValues2;
};

console.log(closeStrings("abc", "bca")); // Output: true
console.log(closeStrings("a", "aa")); // Output: false
console.log(closeStrings("cabbba", "abbccc")); // Output: true