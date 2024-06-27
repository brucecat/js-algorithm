// 部门在进行需求开发时需要进行人力安排。

// 当前部门需要完成 N 个需求，需求用 requirements 表述，requirements[i] 表示第 i 个需求的工作量大小，单位：人月。

// 这部分需求需要在 M 个月内完成开发，进行人力安排后每个月人力时固定的。

// 目前要求每个月最多有2个需求开发，并且每个月需要完成的需求不能超过部门人力。

// 请帮助部门评估在满足需求开发进度的情况下，每个月需要的最小人力是多少？

const getResult = (m, requirements) => {
    const len = requirements.length;

    // 人数为x时，需要fx月完成
    const fx = (x) => {
      let l = 0
      let r = requirements.length - 1
      let need = 0

      while(l <= r){
        if(requirements[l] + requirements[r] <= x){
          l++
        }
        r--
        need++
      }
      return need
    };

    // 先排序
    requirements.sort();
    let left = 1;
    let right = requirements[len - 1] + requirements[len - 2] ?? 0;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (fx(mid) > m) {
            // 要增加人数
            left = mid + 1;
        } else if (fx(mid) < m) {
            // 尝试减少人数
            right = mid;
        } else if (fx(mid) === m) {
            // 继续尝试减少人数
            right = mid;
        }
    }

    return left;
};

const a = 3;
const b = [3, 5, 3, 4];

const res = getResult(a, b);
console.log('res: ', res);
