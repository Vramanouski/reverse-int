module.exports = function reverse (n) {
    const result = Number((Math.abs(n)+'').split('')
    .reverse()
    .join(''));
    return result;
}
