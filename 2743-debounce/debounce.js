/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;

    return function(...args) {
        // Clear any existing timer to "reset" the wait window
        clearTimeout(timer);

        // Start a new timer
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};