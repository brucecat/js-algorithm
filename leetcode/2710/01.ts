function removeTrailingZeros(num: string): string {
    let right = num.length - 1;

    while (right > 0 && Number(num[right]) === 0) {
        right--;
    }

    const res = num.substring(0, right + 1);
    return res;
}
