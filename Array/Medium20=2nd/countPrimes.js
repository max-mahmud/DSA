//  ? 204. Count Primes
//* saive of eratores tachnic
var countPrimes = function (n) {
    let primes = new Array(n).fill(true)
    primes[0], primes[1] = false
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            count++
            for (let j = i * 2; j < n; j += i) {
                primes[j] = false
            }
        }
    }
    return count
};
let n = 10
// Output: 4

