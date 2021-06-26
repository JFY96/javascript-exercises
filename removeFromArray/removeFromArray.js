const removeFromArray = function(array, ...remove) {
    return array.filter(value => !remove.includes(value));
};

module.exports = removeFromArray;
