
// ? 459. Repeated Substring Pattern
var repeatedSubstringPattern = function (s) {
    const n = s.length;
    for (let len = 1; len <= Math.floor(n / 2); len++) {
        if (n % len === 0) {
            let pattern = s.slice(0, len)
            let valid = true
            for (let i = len; i < n; i += len) {
                if (s.slice(i, i + len) !== pattern) {
                    valid = false
                    break
                }
            }
            if (valid) return true;
        }
    }
    return false
};
let s = "abcabc"
//out put: true
console.log(repeatedSubstringPattern(s))