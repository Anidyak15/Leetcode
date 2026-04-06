/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
const returnedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Apply the transformation function to the element and its index
        returnedArray[i] = fn(arr[i], i);
    }
    
    return returnedArray;
}