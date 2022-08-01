你不知道的 LeetCode 技巧（第一篇）
https://developer.aliyun.com/article/786815


你不知道的 LeetCode 技巧（第二篇）
https://blog.csdn.net/azl397985856/article/details/119880917

今天来给使用 **「JS 刷题」**的朋友分享**「三个」** LeetCode 上你或许不知道的刷题技巧。

## tip1 - ES6+

首先穿插一个小知识：`我们提交的 JS 是如何被 LeetCode 执行的？`

我们在力扣提交的代码是放到力扣后台运行的， 而 JS 代码在力扣后台是在 node 中以 --harmony 方式运行的。

大概是这样：

```bash
node --harmony  index.js
```

其中 index.js 就是你提交的代码。

比如：

```js
// 前面 LeetCode 会添加一些代码
function sum(a, b) {
  // you code
}

// 这里是 LeetCode 的测试用例
expect(sum(1, 2)).toBe(3);
expect(sum(1, 8)).toBe(9); // 如果测试用例不通过，则直接抛出错误给前端
```

因此 ES6 特性是完全支持的，大家可以放心使用。

比如我们可以使用 ES6 的解构语法完成数组两个值的交换。

```js
[a, b] = [b, a];
```

如下就是使用了 ES6 的数组解构语法，更多 ES6+ 请参考相关文档。



## tip2 - lodash

在 LeetCode 中 `lodash`默认可直接通过 `_` 访问。

这是因为 LeetCode 直接将 lodash require 进来了。类似：

```js
const _ = require("lodash");

// 前面 LeetCode 会添加一些代码
function sum(a, b) {
  // you code
  // 你的代码可以通过 _ 访问到 lodash 的所有功能。
}

// 这里是 LeetCode 的测试用例
expect(sum(1, 2)).toBe(3);
expect(sum(1, 8)).toBe(9); // 如果测试用例不通过，则直接抛出错误给前端
```

lodash 有很多有用的功能可直接使用，比如数组拍平：

```text
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

再比如深拷贝：

```text
var objects = [{ a: 1 }, { b: 2 }];

var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```

更多 API 可参考官方文档。



## **tip3 - queue & priority-queue**

为了弥补 JS 内置数据结构的缺失。除了 JS 内置数据结构之外，LeetCode 平台还对 JS 提供了两种额外的数据结构，它们分别是:

- queue
- priority-queue

这两个数据结构都使用的是第三方 `datastructures-js` 实现的版本。

### **queue**

LeetCode 提供了 JS 对队列的支持。

```text
// empty queue
const queue = new Queue();

// from an array
const queue = new Queue([1, 2, 3]);
```

其中 queue 的实现也是使用数组模拟。不过不是直接使用 shift 来删除头部元素，因为直接使用 shift 删除最坏情况时间复杂度是O(n)。这里它使用了一种标记技巧，即每次删除头部元素并不是真的移除，而是标记其已经被移除。这种做法时间复杂度可以降低到O(1)。只不过如果不停入队和出队，空间复杂度会很高，因为会保留所有的已经出队的元素。因此它会在每次出队超过一半的时候执行一次**「缩容」**（类似于数组扩容）。这样时间复杂度会增大到 O(logn)，但是空间会省。

详细用法可以参考：[https://github.com/datastructures-js/queue](https://link.zhihu.com/?target=https%3A//github.com/datastructures-js/queue)



### priority-queue

除了普通队列，LeetCode 还提供了一种特殊的队列 - 优先队列。

```js
// empty queue with default priority the element value itself.
const numbersQueue = new MinPriorityQueue();

// empty queue, will provide priority in .enqueue
const patientsQueue = new MinPriorityQueue();

// empty queue with priority returned from a prop of the queued object
const biddersQueue = new MaxPriorityQueue({ priority: (bid) => bid.value });
```

priority-queue 的 api 则可以参考 [https://github.com/datastructures-js/priority-queue](https://link.zhihu.com/?target=https%3A//github.com/datastructures-js/priority-queue)



priority-queue在刷题中是经常能使用得到的数据结构，以leetcode的第1559题为例。![img](https://files.mdnice.com/user/7030/7dc73c1b-815c-4c52-9777-072764ab5699.png)



```js
function containsCycle(grid: string[][]): boolean {
    let rowLen = grid.length;   // 行
    let colLen = grid[0].length; // 列


    if (rowLen < 2 || colLen < 2) {
        return false
    }

    let direction = [
        [0, 1],  // 向下
        [0, -1],   // 向上
        [1, 0], // 向右
        [-1, 0]     // 向左
    ]; // in order 1 to 4

    let visited = new Array(rowLen).fill(0).map(el => new Array(colLen).fill(false));



    function bfs(i, j, d1, d2): boolean {
        let minpq = new MinPriorityQueue({ priority: (item) => item[2] })
        minpq.enqueue([i, j, d1, d2])

        while (!minpq.isEmpty()) {
            let [x, y, prevD1, prevD2] = minpq.dequeue()

            if (visited[x][y]) {
                return true
            }

            visited[x][y] = true

            for (let [nextD1, nextD2] of direction) {
                if (nextD1 === -prevD1 && nextD2 === -prevD2) {
                    // not go back
                    continue;
                }

                let xx = x + nextD1;
                let yy = y + nextD2;


                if (xx < 0 || xx >= rowLen || yy < 0 || yy >= rowLen || grid[x][y] !== grid[xx][yy]) {
                    // 如果下一步越界了
                    continue;
                }

                minpq.enqueue([xx, yy, nextD1, nextD2])
            }
        }
        return false
    }

    for (let i = 0; i < rowLen; i++)
        for (let j = 0; j < colLen; j++) {
            if (!visited[i][j] && bfs(i, j, -1, -1)) {
                return true;
            }
        }
    return false;

};

// for each point, detect a cycle using BFS
// find next available position: not go back: prevDirection !== -nextDirection.
// BFS with postion & direction in to queue


```



## 总结

LeetCode 对 JS 的支持主要有：

- ES6+ 语法的支持
- 内置 lodash 库，可直接通过 `_` 来使用其上的功能函数。
- 内置数据结构支持队列和优先队列。