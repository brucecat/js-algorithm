function longestPalindrome(s: string): string {
    const len = s.length;
    let res = ''

    // 获取以 left right 为中心的回文串
    const getPalindrome = (l: number, r: number) => {
        let left = l;
        let right = r;
        while (left >= 0 && right <= len - 1 && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.substring(left + 1, right);
    };

    for (let i = 0; i <= len - 1; i++) {
        const s1 = getPalindrome(i, i);
        const s2 = getPalindrome(i, i + 1);

        res = res.length > s1.length ? res : s1
        res = res.length > s2.length ? res : s2
    }

    return res;
}

const a = 'babad';
const res1 = longestPalindrome(a);
console.log('res1: ', res1);
