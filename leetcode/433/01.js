function minMutation(start, end, bank) {
    // 广度优先搜索
    var bankSet = new Set(bank);
    if (!bankSet.has(end)) {
        return -1;
    }
    // 初始结点及当前步数
    var q = [[start, 0]];
    // 每个基因对应的可变换基因
    var change = {
        'A': 'TCG',
        'T': 'ACG',
        'C': 'ATG',
        'G': 'ATC'
    };
    // 用队列实现广度优先
    while (q.length > 0) {
        var _a = q.shift(), node = _a[0], step = _a[1];
        // 已经到达目标
        if (node == end) {
            return step;
        }
        for (var i = 0; i < node.length; i++) {
            // 当前字符
            var c = node[i];
            // 可变换的基因
            var cChange = change[c];
            for (var j = 0; j < cChange.length; j++) {
                // 改变后的序列
                var newGene = node.slice(0, i) + cChange[j] + node.slice(i + 1);
                if (bankSet.has(newGene)) {
                    //  如果该序列可行
                    q.push([newGene, step + 1]); // 入队，继续广度搜索
                    bankSet["delete"](newGene); // 避免重复遍历
                }
            }
        }
    }
    return -1;
}
;
function minMutation01(start, end, bank) {
    var words = new Set(bank); //存储字典
    if (!words.has(end))
        return -1; //end不在字典中, 无法转换得到
    var startSet = new Set([start]), endSet = new Set([end]);
    var step = 1;
    while (startSet.size) {
        var cur = new Set();
        for (var _i = 0, startSet_1 = startSet; _i < startSet_1.length; _i++) {
            var word = startSet_1[_i];
            words["delete"](word);
        } //从字典中删除
        for (var _a = 0, startSet_2 = startSet; _a < startSet_2.length; _a++) {
            var word = startSet_2[_a];
            for (var i = 0; i < 8; i++) {
                for (var _b = 0, _c = ['A', 'C', 'G', 'T']; _b < _c.length; _b++) {
                    var ch = _c[_b];
                    var s = word.slice(0, i) + ch + word.slice(i + 1);
                    if (!words.has(s))
                        continue; // 字典中不存在
                    if (endSet.has(s))
                        return step; // 相遇
                    cur.add(s);
                }
            }
        }
        // 保证startSet中的单词数比endSet少
        if (cur.size < endSet.size)
            startSet = cur;
        else
            startSet = endSet, endSet = cur;
        step++;
    }
    return -1;
}
;
