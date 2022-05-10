/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
    iterator: Iterator
    value: any
    constructor(iterator: Iterator) {
        this.iterator = iterator;
        this.value = null;
    }

    peek(): number {
        if (this.value !== null) return this.value;
        this.value = this.iterator.next();
        return this.value;
    }

    next(): number {
        const value = this.value;
        if (value == null) return this.iterator.next();
        this.value = null;
        return value;
    }

    hasNext(): boolean {
        return this.value || this.iterator.hasNext();
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */