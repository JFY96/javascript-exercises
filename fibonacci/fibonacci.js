const fibonacci = function(seq, memo = {}) {
    if (seq < 0) return "OOPS";
    if (seq === 0) return 0;
    if (seq < 3) return 1;
    if (memo[seq]) return memo[seq];
    const val = fibonacci(seq-1, memo) + fibonacci(seq-2, memo);
    memo[seq] = val;
    return val;
};

module.exports = fibonacci;
