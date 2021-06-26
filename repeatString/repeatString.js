const repeatString = function(string, times) {
    if (times < 0) return "ERROR";
    let returnStr = "";
    for (let i = 0; i < times; i++) returnStr += string;
    return returnStr;
};

module.exports = repeatString;
