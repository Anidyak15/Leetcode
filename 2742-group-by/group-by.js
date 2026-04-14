/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};

    for (const item of this) {
        // Generate the key using the provided function
        const key = fn(item);

        // If the key doesn't exist in result yet, initialize it with an empty array
        if (!result[key]) {
            result[key] = [];
        }

        // Push the current item into the array corresponding to its key
        result[key].push(item);
    }

    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */