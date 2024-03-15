// .1544. Make The String Great
var makeGood = function (s) {
    let stack = []
    for (let char of s) {
        let lastChar = stack[stack.length - 1]
        if (lastChar && (char.toLowerCase() === lastChar.toLowerCase()) && (char !== lastChar)) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join("")
};

// Test cases
console.log(makeGood("leEeetcode")); // Output: "leetcode"
console.log(makeGood("abBAcC")); // Output: ""
console.log(makeGood("s")); // Output: "s"