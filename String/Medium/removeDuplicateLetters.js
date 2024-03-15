// ? 316. Remove Duplicate Letters
// *** same answer in both of them
//? 1081. Smallest Subsequence of Distinct Characters
function removeDuplicateLetters(s) {
    const stack = [];
    const seen = new Set();
    const lastOccurrence = {};

    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!seen.has(char)) {
            while (stack.length > 0 && char < stack[stack.length - 1] &&
                i < lastOccurrence[stack[stack.length - 1]]) {
                let remove = stack.pop()
                seen.delete(remove)
            }
            stack.push(char)
            seen.add(char)
        }
    }
    return stack.join("")
}

// Example usage:
// console.log(removeDuplicateLetters("bcabc"));   // Output: "abc"
console.log(removeDuplicateLetters("cbacdcbc"));   // Output: "acdb"