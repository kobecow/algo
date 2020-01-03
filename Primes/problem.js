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

/**
 * 
 * @param {integer} n 
 * @return {Array}
 */
// Using LinkedList

const find_Primes_LL = n => {

    class Node {
        constructor(data) {
            if (data === null) {
                console.log("Must include data");
                return Error
            }
            this.data = data;
            this.next = null;
        }

        getData() {
            return this.data;
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
        }

        add(data) {
            let node = new Node(data);

            let current_node = this.tail;

            if (current_node === null) {
                this.head = node;
                this.tail = this.head;
                return
            } else {
                current_node.next = node;
                this.tail = current_node.next
                return
            }
        }

    }


    if (n < 2) {
        return [];
    }
    linkedPrime = new LinkedList();
    linkedPrime.add(2);

    /**
     * 
     * @param {integer} num
     * @param {Object} LinkedList
     * 
     * @return {Bool}
     */
    const is_prime = (num, LinkedList) => {
        let currentNode = LinkedList.head;
        let currentPrime = currentNode.getData();
        while (currentPrime !== null) {
            if (num % currentPrime === 0) {
                return false;
            }
            currentNode = currentNode.next;
            if (currentNode === null) {
                return true;
            }
            currentPrime = currentNode.getData();
        }
    }

    /**
     * @param {Object} LinkedList
     * @returns {Array} ans
     */
    const LLtoArray = (LinkedList) => {
        let current_node = LinkedList.head;
        const ans = [];
        while (current_node.getData()) {
            ans.push(current_node.getData());
            current_node = current_node.next;
            if (current_node === null) {
                break;
            }


        }
        return ans

    }


    for (i = 2; i < n; i++) {
        let flag = is_prime(i, linkedPrime);
        if (flag) { linkedPrime.add(i) }
    }

    const ans = LLtoArray(linkedPrime);

    return ans
}




console.time("set");
let times_Set = 0;
while (times_Set < 100) {
    find_primes(1000);
    times_Set++
}
console.timeEnd("set");

console.time("LL");
let times_LL = 0;
while (times_LL < 100) {
    find_Primes_LL(1000);
    times_LL++
}
console.timeEnd("LL");



// TODO: Should compare array.


const ll = find_Primes_LL(100);
const ss = find_primes(100);
