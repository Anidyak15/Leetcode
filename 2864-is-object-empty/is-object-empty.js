/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Object.keys returns an array of the object's own string-keyed property names.
    // For arrays, it returns an array of the indices.
    return Object.keys(obj).length === 0;
};