/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => {
        // Compare the results of fn(a) and fn(b)
        return fn(a) - fn(b);
    });
};