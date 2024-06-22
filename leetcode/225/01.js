var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.queue = [];
    }
    MyQueue.prototype.push = function (n) {
        this.queue.push(n);
    };
    MyQueue.prototype.peek = function () {
        return this.queue[0];
    };
    MyQueue.prototype.pop = function () {
        var r = this.peek();
        this.queue.shift();
        return r;
    };
    MyQueue.prototype.size = function () {
        return this.queue.length;
    };
    MyQueue.prototype.isEmpth = function () {
        return this.queue.length == 0;
    };
    return MyQueue;
}());
var MyStack = /** @class */ (function () {
    function MyStack() {
        this.Q = new MyQueue();
    }
    MyStack.prototype.push = function (x) {
        var l = this.Q.queue.length;
        this.Q.push(x);
        for (var i = 1; i <= l; i++) {
            var r = this.Q.pop();
            this.Q.push(r);
        }
    };
    MyStack.prototype.pop = function () {
        return this.Q.pop();
    };
    MyStack.prototype.top = function () {
        return this.Q.peek();
    };
    MyStack.prototype.empty = function () {
        return this.Q.queue.length == 0;
    };
    return MyStack;
}());
