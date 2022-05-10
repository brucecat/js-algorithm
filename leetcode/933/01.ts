class RecentCounter {
    private queue: any
    constructor() {
        this.queue = new Queue()
    }

    ping(t: number): number {
        while (this.queue.size() > 0 && this.queue.front() < t - 3000)
            this.queue.dequeue()
        this.queue.enqueue(t)
        return this.queue.size()
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */