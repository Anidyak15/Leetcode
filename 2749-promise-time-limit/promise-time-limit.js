/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        // Create a promise that rejects after t milliseconds
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // The actual function call
        const functionPromise = fn(...args);

        // Race them!
        return Promise.race([functionPromise, timeoutPromise]);
    }
};