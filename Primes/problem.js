/**
 * Given a positive integer n, find all primes less than n.
 *
 * const find_primes = (n) => {
 * // Fill this in.
 * 
 * }:
 *
 * console.log(find_primes(20));
 * // [2,3,5,7,11,13,17,19]
 * 
 */


/**
 * 
 * @param {intger} n
 * @returns {Array} ans
 * 
 */

const find_primes = n => {
    if (n < 2) {
        return [];
    }

    const set_Primes = new Set([2]);

    const is_Prime = (element_Prime, value2, set) => {
        console.log(i)
        trueOrFalse.push(i % element_Prime === 0);
    }

    let trueOrFalse = [];
    for (i = 2; i < n; i++) {
        trueOrFalse = [];

        set_Primes.forEach(is_Prime);
        if (!trueOrFalse.includes(true)) {
            // This is Prime
            set_Primes.add(i);

        }


    }
    return Array(set_Primes)

}

console.log(find_primes(20));