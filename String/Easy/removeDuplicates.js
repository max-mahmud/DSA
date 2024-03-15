// . 1047. Remove All Adjacent Duplicates In String
// ** check only last letter  **
var removeDuplicates = function (s) {
    const stack = [];
    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};
let s = "abbacadcad"
removeDuplicates(s)

