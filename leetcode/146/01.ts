class DoubleLinkNode {
    key: number;
    val: number;
    next: DoubleLinkNode;
    prev: DoubleLinkNode;

    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

class DoubleLink {
    size: number;
    head: DoubleLinkNode;
    tail: DoubleLinkNode;

    constructor() {
        this.size = 0;
        this.head = new DoubleLinkNode(-1, -1);
        this.tail = new DoubleLinkNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addLast(node) {
        // 获取倒数第二个节点
        const lastSecondNode = this.tail.prev;

        // 插入到倒数第二个节点后面
        lastSecondNode.next = node;
        this.tail.prev = node;

        node.prev = lastSecondNode;
        node.next = this.tail;

        this.size++;
    }

    remove(node) {
        // 因为前后有head和tail兜着，在链表中间直接删除即可
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        this.size--;
    }

    // 删除首个节点并返回
    removeFirst() {
        if (this.size < 1) {
            return null;
        }

        const first = this.head.next;
        this.remove(first);
        return first;
    }

    print() {
        let res = 'head';
        let cur = this.head.next;
        while (cur !== this.tail) {
            res = `${res} -> {${cur.key} , ${cur.val}}`;
            cur = cur.next;
        }
        console.log('res: ', res);
    }
}

class LRUCache {
    capacity: number;
    keyToNodeMap: Map<number, DoubleLinkNode>;
    doubleLink: DoubleLink;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.keyToNodeMap = new Map();
        this.doubleLink = new DoubleLink();
    }

    get(key: number): number {
        if (!this.keyToNodeMap.has(key)) {
            return -1;
        }

        // 获取key对应的节点
        const node = this.keyToNodeMap.get(key);

        // 删除这个节点并更新到最后
        this.doubleLink.remove(node);
        this.updateNode(node);

        return node.val;
    }

    put(key: number, value: number): void {
        // 如果是已有的值，只做更新操作
        if (this.keyToNodeMap.has(key)) {
            const curNode = this.keyToNodeMap.get(key);
            curNode.val = value;

            this.doubleLink.remove(curNode);
            this.updateNode(curNode);
            return;
        }

        // 容量是否满了
        if (this.doubleLink.size >= this.capacity) {
            // 删除最后使用的节点
            const deleteNode = this.doubleLink.removeFirst();

            this.keyToNodeMap.delete(deleteNode.key);
        }

        // 开始插入
        const newNode = new DoubleLinkNode(key, value);
        this.keyToNodeMap.set(key, newNode);
        this.updateNode(newNode);
    }

    // 插入或读取时，将这个节点插入到最后
    private updateNode(node) {
        this.doubleLink.addLast(node);
    }

    // log调试方法
    print() {
        console.log('\n\n--------------------------');
        console.log('keyToNodeMap: ', this.keyToNodeMap);
        this.doubleLink.print();
        console.log('--------------------------');
    }
}

const main2 = () => {
    //   ["LFUCache","put","put","get","put","get","get","put","get","get","get"]
    // [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]
    // 输出： [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

    // 构造一个容量为 2 的 LFU 缓存
    const cache = new LRUCache(2);
    cache.print();

    cache.put(1, 1); // 缓存是 {1=1}
    cache.put(2, 2); // 缓存是 {1=1, 2=2}

    const res1 = cache.get(1); // 返回 1
    cache.print();
    console.log('res1: ', res1);

    cache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
    const res2 = cache.get(2); // 返回 -1 (未找到)
    console.log('res2: ', res2);
    cache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}

    const res3 = cache.get(1); // 返回 -1 (未找到)
    console.log('res3: ', res3);
    const res4 = cache.get(3); // 返回 3
    console.log('res4: ', res4);
    const res5 = cache.get(4); // 返回 4
    console.log('res5: ', res5);

    cache.print();
};

// main2();

const main3 = () => {
    // ["LRUCache","get","put","get","put","put","get","get"]
    // [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]
    // 预期结果：[null,-1,null,-1,null,null,2,6]

    const cache = new LRUCache(2);
    console.log('cache.get(2): ', cache.get(2));

    cache.put(2, 6);

    console.log('cache.get(1): ', cache.get(1));

    cache.put(1, 5);
    cache.put(1, 2);

    console.log('cache.get(1): ', cache.get(1));

    cache.print();
    console.log('cache.get(2): ', cache.get(2));
};

main3();
