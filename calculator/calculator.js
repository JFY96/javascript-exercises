const add = function(value1, value2) {
	return value1 + value2;
};

const subtract = function(value1, value2) {
	return value1 - value2;
};

const sum = function(values) {
  if (values.length < 1) return 0;
  return values.reduce((accum, val) => accum + val);
};

const multiply = function(values) {
  if (values.length < 1) return 0;
  return values.reduce((accum, val) => accum * val);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(val) {
  if (val <= 0) return 1;
	return val * factorial(val-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
