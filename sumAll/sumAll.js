const sumAll = function(from, to) {
    if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0) return "ERROR";
    const temp = from;
    if (to < from) {
        from = to;
        to = temp;
    }
    return ((to*(to+1))/2) - ((from*(from-1))/2);
};

module.exports = sumAll;
