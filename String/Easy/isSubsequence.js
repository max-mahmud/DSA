// . 392. Is Subsequence
var isSubsequence = function (s, t) {
    let left = 0;
    let rigth = 0;
    let full = t.length;
    while (rigth < full) {
        if (s[left] === t[rigth]) {
            left++
        }
        rigth++
    }
    return left === s.length;
};

let s = "axc", t = "ahbgdc"
console.log(isSubsequence(s, t))
// Output: true