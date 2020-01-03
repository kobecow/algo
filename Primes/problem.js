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
 * @returns {Array} 
 * 
 */

const find_primes = n => {
    if (n < 2) {
        return [];
    }

    const set_Primes = new Set([2]);

    const is_Prime = (element_Prime, value2, set) => {
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
    return Array.from(set_Primes);

}
// const startTime_Set = performance.now();
console.time("set");
let times_Set = 0;
while (times_Set < 100) {
    find_primes(100);
    times_Set++
    console.log(times_Set);
}
console.timeEnd("set");
// const endTime_Set = performance.now();

// console.log(endTime_Set - startTime_Set);