/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let currentLength = 1;
    let maxLength = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentLength++;
        } else {
            currentLength = 1;
        }

        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};