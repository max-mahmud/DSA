// ? 1759. Count Number of Homogenous Substrings
function countHomogenous(s) {
    const MOD = 1e9 + 7; // Modulo value
    let count = 1; // Initial count of homogenous substrings
    let prevCount = 1; // Count of homogenous substrings including previous character
    let i = 1; // Start from the second character

    // Iterate through the string
    while (i < s.length) {
        if (s[i] === s[i - 1]) {
            prevCount++; // Increment count of homogenous substrings including current character
        } else {
            prevCount = 1; // Reset count for new character
        }
        console.log(prevCount)

        count = (count + prevCount) % MOD; // Update total count
        i++;
    }

    return count;
}

// Example usage:
console.log(countHomogenous("abbcccaa")); // Output: 13
console.log(countHomogenous("xy"));       // Output: 2
console.log(countHomogenous("zzzzz"));    // Output: 15