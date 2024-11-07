const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let ans = array.reduce((total, num) => {
    return total + num;
  }, 0);

  return ans;
};

const multiply = function(array) {
  let ans = array.reduce((total, num) => {
    return total * num;
  }, 1);

  return ans;
};

const power = function(num, pow) {
  let ans = 1;
  for(let i = 0; i < pow; i++) {
    ans *= num;
  }

  return ans;
};

const factorial = function(num) {
  let ans = 1;
  for(let i = num; i > 0; i--) {
    ans *= i;
  }

  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
