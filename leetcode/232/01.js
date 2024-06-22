var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.inStack = [];
        this.outStack = [];
    }
    MyQueue.prototype.push = function (x) {
        this.inStack.push(x);
    };
    MyQueue.prototype.pop = function () {
        this.move();
        return this.outStack.pop();
    };
    MyQueue.prototype.peek = function () {
        this.move();
        return this.outStack[this.outStack.length - 1];
    };
    MyQueue.prototype.move = function () {
        if (this.outStack.length === 0) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }
    };
    MyQueue.prototype.empty = function () {
        return this.inStack.length === 0 && this.outStack.length === 0;
    };
    return MyQueue;
}());
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */ 
