/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */
var PeekingIterator = /** @class */ (function () {
    function PeekingIterator(iterator) {
        this.iterator = iterator;
        this.value = null;
    }
    PeekingIterator.prototype.peek = function () {
        if (this.value !== null)
            return this.value;
        this.value = this.iterator.next();
        return this.value;
    };
    PeekingIterator.prototype.next = function () {
        var value = this.value;
        if (value == null)
            return this.iterator.next();
        this.value = null;
        return value;
    };
    PeekingIterator.prototype.hasNext = function () {
        return this.value || this.iterator.hasNext();
    };
    return PeekingIterator;
}());
/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */ 
