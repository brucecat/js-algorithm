// 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。

// 实现 LFUCache 类：

// LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
// int get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。
// void put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量 capacity 时，则应该在插入新项之前，移除最不经常使用的项。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最久未使用 的键。
// 为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。

// 当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。

// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

// 双向链表node
class DoubleLinkNode {
    key: number;
    val: number;
    freq: number;
    prev?: DoubleLinkNode | null;
    next?: DoubleLinkNode | null;

    constructor(key, val, freq) {
        this.freq = freq;
        this.key = key;
        this.val = val;
    }
}

// 双向链表
class DoubleLink {
    size: number;
    head: DoubleLinkNode | null;
    tail: DoubleLinkNode | null;

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // 删除一个节点
    remove(node: DoubleLinkNode) {
        // 空链表
        if (this.size < 1) {
            return;
        }

        // 只有一个元素
        if (this.size === 1) {
            this.size = 0;
            this.head = null;
            this.tail = null;
            return;
        }

        // 删的是头结点
        if (node === this.head) {
            const nextNode = node.next;
            nextNode.prev = null;
            this.head = nextNode;

            this.size--;
            return;
        }

        // 删的是尾结点
        if (node === this.tail) {
            const prevNode = node.prev;
            prevNode.next = null;
            this.tail = prevNode;
            this.size--;
            return;
        }

        // 正常删中间节点
        const prevNode = node.prev;
        const nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.size--;
    }

    // 在尾部插入一个节点
    addLast(node: DoubleLinkNode) {
        // 空链表
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            // 非空链表
            const curTail = this.tail;
            curTail.next = node;
            node.prev = curTail;
            this.tail = node;
        }
        this.size++;
    }

    // 是否是空链表
    isEmpty() {
        return this.size === 0;
    }
}

// 实现LFU缓存
class LFUCache {
    keyToNodeMap: Map<number, DoubleLinkNode>;
    freqToKeysMap: Map<number, DoubleLink>;
    capacity: number;
    minFreq: number;

    constructor(capacity: number) {
        this.keyToNodeMap = new Map();
        this.freqToKeysMap = new Map();

        this.capacity = capacity;
        this.minFreq = 0;
    }

    get(key: number): number {
        if (!this.keyToNodeMap.has(key)) {
            return -1;
        }

        const node = this.keyToNodeMap.get(key);

        // 增加频次
        this.increaseFreq(node);

        return node.val;
    }

    put(key: number, value: number): void {
        // key已经存在
        if (this.keyToNodeMap.has(key)) {
            // 修改对应的node的val即可
            const node = this.keyToNodeMap.get(key);
            node.val = value;
            this.increaseFreq(node);
        } else {
            // key不存在
            // 容量满了
            if (this.keyToNodeMap.size >= this.capacity) {
                // 删除最小频次中最久没使用的
                this.removeMinFreqKey();
            }

            // ------------正式开始插入------------
            const newNode = new DoubleLinkNode(key, value, 1);
            this.keyToNodeMap.set(key, newNode);

            if (!this.freqToKeysMap.get(1)) {
                this.freqToKeysMap.set(1, new DoubleLink());
            }

            // 维护频次表
            const link = this.freqToKeysMap.get(1);
            link.addLast(newNode);

            // 插入新 key 后最小的 freq 肯定是 1
            this.minFreq = 1;
        }
    }

    // 增加频次
    increaseFreq(node: DoubleLinkNode) {
        const oldFreq = node.freq;
        const newFreq = node.freq + 1;
        node.freq = newFreq;

        // 维护频次表
        const oldFreqLink = this.freqToKeysMap.get(oldFreq);

        // 从旧频次表中删除这个node
        oldFreqLink.remove(node);
        if (oldFreqLink.isEmpty()) {
            this.freqToKeysMap.delete(oldFreq);

            // 如果这个频次正好是最低频次，记得更新最小频次
            if (this.minFreq === oldFreq) {
                this.minFreq = newFreq;
            }
        }

        // 维护新频次表
        if (!this.freqToKeysMap.get(newFreq)) {
            this.freqToKeysMap.set(newFreq, new DoubleLink());
        }
        const newFreqLink = this.freqToKeysMap.get(newFreq);
        newFreqLink.addLast(node);
    }

    // 删除最小频次中最久没使用的
    removeMinFreqKey() {
        const minFreqLink = this.freqToKeysMap.get(this.minFreq);

        // 其中最先被插入的那个 node 就是该被淘汰的 node
        const deletedNode = minFreqLink.head;

        // 维护最小频次map
        minFreqLink.remove(deletedNode);
        if (minFreqLink.isEmpty()) {
            this.freqToKeysMap.delete(this.minFreq);
        }

        // key表中删除对应Node
        this.keyToNodeMap.delete(deletedNode.key);
    }

    // log调试方法
    print() {
        console.log('keyToNodeMap: ', this.keyToNodeMap);
        console.log('freqToKeysMap: ', this.freqToKeysMap);
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const main = () => {
    // 构造一个容量为 2 的 LFU 缓存
    var cache = new LFUCache(2);
    cache.print();

    // 插入两对 (key, val)，对应的 freq 为 1
    cache.put(1, 10);
    cache.print();

    cache.put(2, 20);

    cache.print();

    // 查询 key 为 1 对应的 val
    // 返回 10，同时键 1 对应的 freq 变为 2
    const res1 = cache.get(1);
    console.log('res1: ', res1);
    cache.print();

    // 容量已满，淘汰 freq 最小的键 2
    // 插入键值对 (3, 30)，对应的 freq 为 1
    cache.put(3, 30);
    cache.print();

    // 键 2 已经被淘汰删除，返回 -1
    const res2 = cache.get(2);
    cache.print();

    console.log('res2: ', res2);
    cache.print();
};

// main()

const main2 = () => {
    //   ["LFUCache","put","put","get","put","get","get","put","get","get","get"]
    // [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]
    // 输出： [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

    // 构造一个容量为 2 的 LFU 缓存
    const cache = new LFUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);

    console.log('cache.get(1): ', cache.get(1)); // 1
    cache.print();

    cache.put(3, 3);

    console.log('cache.get(2): ', cache.get(2)); // -1
    console.log('cache.get(3): ', cache.get(3)); // 3

    cache.print();
    cache.put(4, 4);
    cache.print()

    console.log('cache.get(1): ', cache.get(1)); // -1

    console.log('cache.get(3): ', cache.get(3)); // 3

    console.log('cache.get(4): ', cache.get(4)); // 4
};

main2();
