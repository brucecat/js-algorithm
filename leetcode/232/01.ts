class MyQueue {
    private inStack: number[]
    private outStack: number[]
    constructor() {
        this.inStack = []
        this.outStack = []
    }

    push(x: number): void {
        this.inStack.push(x)
    }

    pop(): number {
        this.move()
        return this.outStack.pop()

    }

    peek(): number {
        this.move()
        return this.outStack[this.outStack.length - 1];
    }

    move(): void {   
        if (this.outStack.length === 0) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }
    }

    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */