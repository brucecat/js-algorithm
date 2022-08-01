
function isAlienSorted(words: string[], order: string): boolean {
    const mp = new Map()
    for (let i = 0; i < order.length; i++) {
        mp.set(order.charAt(i), i)
    }
    for (const [i, w] of words.entries()) {
        if (i == words.length - 1) {
            break
        }
        for (let j = 0; j < w.length; j++) {
            if (j == words[i + 1].length) {
                return false
            }
            const a = mp.get(w.charAt(j)), b = mp.get(words[i + 1].charAt(j))
            if (a > b) {
                return false
            } else if (a < b) {
                break
            }
        }
    }
    return true
};