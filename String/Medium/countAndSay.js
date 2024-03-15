// ? 38. Count and Say
var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    }
    const prevTerm = countAndSay(n - 1);
    let result = "";
    let count = 0;
    let currentDigit = prevTerm[0]
    for (let i = 0; i < prevTerm.length; i++) {
        if (prevTerm[i] === currentDigit) {
            count++
        } else {
            result += count + currentDigit
            count = 1
            currentDigit = prevTerm[i]
        }
    }
    result += count + currentDigit
    return result;
};
// Test cases
console.log(countAndSay(1)); // Output: "1"
console.log(countAndSay(4)); // Output: "1211"