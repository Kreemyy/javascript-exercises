const sumAll = function (a, b) {
  if (a < 0 || Math.floor(a) !== a) return "ERROR";
  if (b < 0 || Math.floor(b) !== b) return "ERROR";

  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
