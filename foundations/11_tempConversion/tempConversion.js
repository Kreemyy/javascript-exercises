const convertToCelsius = function (F) {
  const celcius = (F - 32) * (5 / 9);
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function (C) {
  const fahrenheit = (C * 9) / 5 + 32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
