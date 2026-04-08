/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // This is our 'memory' or cache
    const cache = new Map();

    return function(...args) {
        // Create a unique key based on the arguments
        // We stringify the array so [2,2] becomes "2,2"
        const key = JSON.stringify(args);

        // Check if we've seen these inputs before
        if (cache.has(key)) {
            return cache.get(key);
        }

        // If not, run the function, save the result, and return it
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */