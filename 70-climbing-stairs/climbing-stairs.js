/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     let prev2 = 1;
    let prev1 = 2;

    for (let i = 3; i <= n; i++) {
        let current = prev1 + prev2;

        prev2 = prev1;
        prev1 = current;
    }

    return n === 1 ? 1 : prev1;
};