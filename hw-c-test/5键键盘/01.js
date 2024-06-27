/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const directives = line.split(' ');

    console.log(getFinalLetterCount(directives));
});

function getFinalLetterCount(directives) {
    const screen = [];
    const clip = [];
    let isSelect = false;

    directives.forEach((directive) => {
        switch (directive) {
            case '1': // a
                if (isSelect) screen.length = 0;
                screen.push('a');
                isSelect = false;
                break;
            case '2': // ctrl-c
                if (isSelect) {
                    clip.length = 0;
                    clip.push(...screen);
                }
                break;
            case '3': // ctrl-x
                if (isSelect) {
                    clip.length = 0;
                    clip.push(...screen);
                    screen.length = 0;
                    isSelect = false;
                }
                break;
            case '4': // ctrl-v
                if (isSelect) screen.length = 0;
                screen.push(...clip);
                isSelect = false;
                break;
            case '5': // ctrl-a
                if (screen.length !== 0) isSelect = true;
                break;
        }
    });

    return screen.length;
}
