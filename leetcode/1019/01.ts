class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function nextLargerNodes(head: ListNode | null): number[] {
    const stack = [];
    const infoArr = [];

    let cur = head;
    let index = 0;

    const indexToValMap = new Map();

    while (cur !== null) {
        const curVal = cur.val;
        indexToValMap.set(index, curVal);

        while (stack.length > 0 && curVal > stack[stack.length - 1].val) {
            const { index: smallItemIndex, val } = stack.pop();

            infoArr.push({
                greatIndex: index,
                index: smallItemIndex,
            });
        }

        stack.push({ index, val: curVal });

        index++;
        cur = cur.next;
    }

    const resArr = new Array(index).fill(0);

    infoArr.forEach((info) => {
        const { greatIndex, index } = info;

        resArr[index] = indexToValMap.get(greatIndex);
    });

    return resArr;
}

const link = [2, 7, 4, 3, 5];

const nodeList = link.map((i) => new ListNode(i, null));
nodeList[0].next = nodeList[1];
nodeList[1].next = nodeList[2];
nodeList[2].next = nodeList[3];
nodeList[3].next = nodeList[4];

console.log(nodeList[0]);

const res = nextLargerNodes(nodeList[0]);
console.log('res: ', res);
