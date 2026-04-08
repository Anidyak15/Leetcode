/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        // We start with x as the initial value
        // We apply functions from right-to-left
        return functions.reduceRight((acc, fn) => {
            return fn(acc);
        }, x);
    };
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */