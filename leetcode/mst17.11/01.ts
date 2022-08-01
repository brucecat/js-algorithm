const MAX = 1e5 + 9
function findClosest(words: string[], word1: string, word2: string): number {
    let ans = MAX, idx1 = MAX, idx2 = -MAX
    for (const [i, word] of words.entries()) {
        if (word === word1) {
            idx1 = i
        } else if (word === word2) {
            idx2 = i
        }
        ans = Math.min(ans, Math.abs(idx1 - idx2))
    }
    return ans
};
