//. 1704. Determine if String Halves Are Alike
var halvesAreAlike = function (s) {
    const countVowels = (c) => {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        let count = 0
        for (let char of c) {
            if (vowels.has(char)) {
                count++
            }
        }
        return count
    }

    let half = s.length / 2;
    let firstHalf = s.substring(0, half)
    let secondHalf = s.substring(half)

    const vowelsInFirstHalf = countVowels(firstHalf);
    const vowelsInSecondHalf = countVowels(secondHalf);

    return vowelsInFirstHalf === vowelsInSecondHalf

};

let s = "textbook"
Output: true
halvesAreAlike(s)