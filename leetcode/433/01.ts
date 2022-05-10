function minMutation(start: string, end: string, bank: string[]): number {
    // 广度优先搜索
    let bankSet = new Set(bank)

    if (!bankSet.has(end)) {
        return -1
    }
    // 初始结点及当前步数
    let q: any[] = [[start, 0]]

    // 每个基因对应的可变换基因
    let change = {
        'A': 'TCG',
        'T': 'ACG',
        'C': 'ATG',
        'G': 'ATC'
    }

    // 用队列实现广度优先
    while (q.length > 0) {
        let [node, step] = q.shift()

        // 已经到达目标
        if (node == end) {
            return step
        }


        for (let i = 0; i < node.length; i++) {
            // 当前字符
            let c = node[i]

            // 可变换的基因
            let cChange = change[c]

            for (let j = 0; j < cChange.length; j++) {
                // 改变后的序列
                let newGene = node.slice(0, i) + cChange[j] + node.slice(i + 1)
                if (bankSet.has(newGene)) {
                    //  如果该序列可行
                    q.push([newGene, step + 1])  // 入队，继续广度搜索
                    bankSet.delete(newGene) // 避免重复遍历
                }
            }
        }

    }


    return -1
};



function minMutation01(start: string, end: string, bank: string[]): number {
    const words = new Set(bank); //存储字典
    if (!words.has(end)) return -1; //end不在字典中, 无法转换得到
    let startSet = new Set([start]), endSet = new Set([end]);
    let step = 1;
    while (startSet.size) {
        let cur: Set<string> = new Set();
        for (const word of startSet) words.delete(word); //从字典中删除
        for (const word of startSet) {
            for (let i = 0; i < 8; i++) {
                for (const ch of ['A', 'C', 'G', 'T']) {
                    let s = word.slice(0, i) + ch + word.slice(i + 1);
                    if (!words.has(s)) continue; // 字典中不存在
                    if (endSet.has(s)) return step; // 相遇
                    cur.add(s);
                }
            }
        }
        // 保证startSet中的单词数比endSet少
        if (cur.size < endSet.size) startSet = cur;
        else startSet = endSet, endSet = cur;
        step++;
    }
    return -1;
};