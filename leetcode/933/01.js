var RecentCounter = /** @class */ (function () {
    function RecentCounter() {
        this.queue = new Queue();
    }
    RecentCounter.prototype.ping = function (t) {
        while (this.queue.size() > 0 && this.queue.front() < t - 3000)
            this.queue.dequeue();
        this.queue.enqueue(t);
        return this.queue.size();
    };
    return RecentCounter;
}());
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */ 
