/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on('line', (line) => {
    lines.push(line);

    if (lines.length === 3) {
        let n = parseInt(lines[0]);
        let heights = lines[1].split(' ').map(Number);
        let weights = lines[2].split(' ').map(Number);

        console.log(getResult(n, heights, weights));

        lines.length = 0;
    }
});

function getResult(n, heights, weights) {
    let persons = [];
    for (let i = 0; i < n; i++) {
        let p = {};
        p.index = i + 1;
        p.height = heights[i];
        p.weight = weights[i];
        persons.push(p);
    }

    return persons
        .sort((a, b) =>
            a.height != b.height ? a.height - b.height : a.weight != b.weight ? a.weight - b.weight : a.index - b.index
        )
        .map((p) => p.index)
        .join(' ');
}
