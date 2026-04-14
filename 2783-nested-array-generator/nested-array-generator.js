/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    for (const item of arr) {
        if (Array.isArray(item)) {
            // yield* delegates execution to another generator
            yield* inorderTraversal(item);
        } else {
            // It's a number, so yield it directly
            yield item;
        }
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */