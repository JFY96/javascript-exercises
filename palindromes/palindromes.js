const palindromes = function (string) {
    // strip non word characters (strip all punctuation and whitespace), convert to lowercase
    const str = string.replace(/[^\w]+/g, "").toLowerCase();
    // check both ends to see if its same word backwards
    for (let i = 0, j = str.length-1; i++, j--; i < j) {
        if (str.charAt(i) !== str.charAt(j)) return false;
    }
    // return str.split("").reverse().join("") === str;
    return true;
};

module.exports = palindromes;
