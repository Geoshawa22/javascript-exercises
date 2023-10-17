const sumAll = function (number1, number2) {
  let totalSum = 0;

  if (!Number.isInteger(number1) || !Number.isInteger(number2)) return "ERROR";
  else {
    if (number1 < 0 || number2 < 0) return "ERROR";
    else {
      if (number1 >= number2) {
        for (number2; number2 <= number1; number2++) {
          totalSum += number2;
        }
      } else {
        for (number1; number1 <= number2; number1++) {
          totalSum += number1;
        }
      }
    }

    return totalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
