// ? 290. Word Pattern
function wordPattern(pattern, s) {
    const temp = s.split(" ");
    const count = temp.length;
    const n = pattern.length;

    if (count !== n)
        return false;

    const mp = new Map();
    const used = new Set();

    for (let i = 0; i < n; i++) {
        if (!mp.has(temp[i]) && !used.has(pattern[i])) {
            used.add(pattern[i]);
            mp.set(temp[i], pattern[i]);
        } else if (mp.get(temp[i]) !== pattern[i]) {
            return false
        }
    }

    return true;
}


// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog constructor constructor dog")); // Output: true
console.log(wordPattern("abba", "dog dog dog dog")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false