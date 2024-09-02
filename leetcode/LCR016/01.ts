function lengthOfLongestSubstring(s: string): number {
    let res = 0;
    const window = new Map();
    let left = 0;
    let right = 0;

    while (right < s.length) {
        let rightChar = s[right];
        right++;

        // 进行窗口内数据的一系列更新
        window.set(rightChar, (window.get(rightChar) || 0) + 1);

        while(window.get(rightChar) > 1){
          let leftChar = s[left];
          left++;

          // 进行窗口内数据的一系列更新
          window.set(leftChar, window.get(leftChar) - 1);
        }

        // 在这里更新答案
        res = Math.max(res, right - left);
    }
    return res;
}
