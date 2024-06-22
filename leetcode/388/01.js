function lengthLongestPath(input) {
    var dirArr = input.split('\n');
    console.log("dirArr", dirArr);
    console.log("--------------");
    if (dirArr.length < 1) {
        return 0;
    }
    var stack = [];
    var max = 0;
    for (var _i = 0, dirArr_1 = dirArr; _i < dirArr_1.length; _i++) {
        var dir = dirArr_1[_i];
        var len = dir.length;
        var count = 0, l = 0;
        while (l < len) {
            if (dir[l] == '\t') {
                count++;
            }
            else {
                break;
            }
            l++;
        }
        console.log(count);
        console.log("stack1", stack);
        console.log("count", count);
        stack = stack.slice(0, count);
        console.log("stack2", stack);
        var str = dir.slice(count);
        stack[count] = str;
        console.log("stack3", stack);
        if (str.includes('.')) {
            var fileName = stack.join('/');
            max = Math.max(fileName.length, max);
        }
        console.log("--------------");
    }
    return max;
}
;
// 利用栈来存储文件目录层级
// 我们先用 \n 将输入截断，得到一个保存文件目录的数组
// 遍历数组，计算每个文件目录前面 \t 的个数，
// 有多少个 \t 就代表他在栈的哪个位置
// 例如：有0个 \t 就是顶级文件夹，就在栈的第一个位置，
// 有一个 \t 就在栈的第二个位置
// 所以，我们取得 \t 的个数count后，
// 将栈截取 0 到 count，
// 把遍历的文件或者文件夹名字放在栈的count位置，
// 当我们遍历的是文件名字时，
// 把栈里面的文件以及文件名字用 / 拼接，再取最大长度
// "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
// dirArr [
//     'dir',
//     '\tsubdir1',
//     '\t\tfile1.ext',
//     '\t\tsubsubdir1',
//     '\tsubdir2',
//     '\t\tsubsubdir2',
//     '\t\t\tfile2.ext'
//   ]
//   --------------
//   0
//   stack1 []
//   count 0
//   stack2 []
//   stack3 [ 'dir' ]
//   --------------
//   1
//   stack1 [ 'dir' ]
//   count 1
//   stack2 [ 'dir' ]
//   stack3 [ 'dir', 'subdir1' ]
//   --------------
//   2
//   stack1 [ 'dir', 'subdir1' ]
//   count 2
//   stack2 [ 'dir', 'subdir1' ]
//   stack3 [ 'dir', 'subdir1', 'file1.ext' ]
//   --------------
//   2
//   stack1 [ 'dir', 'subdir1', 'file1.ext' ]
//   count 2
//   stack2 [ 'dir', 'subdir1' ]
//   stack3 [ 'dir', 'subdir1', 'subsubdir1' ]
//   --------------
//   1
//   stack1 [ 'dir', 'subdir1', 'subsubdir1' ]
//   count 1
//   stack2 [ 'dir' ]
//   stack3 [ 'dir', 'subdir2' ]
//   --------------
//   2
//   stack1 [ 'dir', 'subdir2' ]
//   count 2
//   stack2 [ 'dir', 'subdir2' ]
//   stack3 [ 'dir', 'subdir2', 'subsubdir2' ]
//   --------------
//   3
//   stack1 [ 'dir', 'subdir2', 'subsubdir2' ]
//   count 3
//   stack2 [ 'dir', 'subdir2', 'subsubdir2' ]
//   stack3 [ 'dir', 'subdir2', 'subsubdir2', 'file2.ext' ]
//   --------------
