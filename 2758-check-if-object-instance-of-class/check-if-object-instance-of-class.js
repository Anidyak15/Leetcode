/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    // 1. Handle edge cases: if either input is null/undefined or if classFunction isn't a function
    if (obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false;
    }

    // 2. Get the prototype of the object (handles primitives too)
    let currPrototype = Object.getPrototypeOf(obj);

    // 3. Walk up the prototype chain
    while (currPrototype !== null) {
        if (currPrototype === classFunction.prototype) {
            return true;
        }
        currPrototype = Object.getPrototypeOf(currPrototype);
    }

    return false;
};