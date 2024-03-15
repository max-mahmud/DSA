//? 443. String Compression
var compress = function (chars) {
    if (chars.length <= 1) return chars.length;
    let index = 0;
    let i = 0;
    let count = 1;
    while (i < chars.length) {
        if (i + 1 < chars.length && chars[i] === chars[i + 1]) {
            count++;
        } else {
            chars[index] = chars[i];
            if (count > 1) {
                count.toString().split('').forEach(digit => {
                    index++;
                    chars[index] = digit;
                });
            }
            index++;
            count = 1;
        }
        i++;
    }
    return index;
}
let chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
output: 4
console.log(compress(chars))