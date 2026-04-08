/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        // The result of the function becomes the new 'val' for the next iteration
        val = fn(val, nums[i]);
    }

    return val;
};