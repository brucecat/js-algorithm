class CycleLinkedListNode {
    prev = null;
    next = null;
    val = null;
    constructor(val) {
        this.val = val;
    }
}

class CycleLinkedList {
    // 初始化数量
    size = 0;

    // 首节点
    head = null;

    // 尾结点
    tail = null;

    // 插入
    append(val) {
        const newNode = new CycleLinkedListNode(val);

        if (this.size < 1) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.head.prev = this.tail;
        this.tail.next = this.head;

        this.size++;
    }

    // 删除
    remove(curNode: CycleLinkedListNode) {
        // 删除过程
        let preNode = curNode.prev;
        let nextNode = curNode.next;

        nextNode.prev = preNode;
        preNode.next = nextNode;


        if (this.head === curNode) {
            this.head = nextNode;
        }

        if (this.tail === curNode) {
            this.tail = preNode;
        }

        this.size--;
    }
}

function getResult(n) {
    const list = new CycleLinkedList();
    for (let i = 1; i <= n; i++) list.append(i);

    let num = 1;
    let cur = list.head;

    while (list.size > 1) {
        if (num == 3) {
            num = 1;
            list.remove(cur)
            cur = cur.next

        } else {
            num++;
            cur = cur.next;
        }
    }

    return cur.val;
}



const a = getResult(999)
console.log('a: ', a);