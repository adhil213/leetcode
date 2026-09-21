/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const aliceTotal = aliceSizes.reduce((sum, x) => sum + x, 0);
    const bobTotal = bobSizes.reduce((sum, x) => sum + x, 0);

    const difference = (aliceTotal - bobTotal) / 2;

    const bobSet = new Set(bobSizes);

    for (const x of aliceSizes) {
        const y = x - difference;

        if (bobSet.has(y)) {
            return [x, y];
        }
    }
};