const palindromes = function (str) {
  let cleanedStr = str
    .toLowerCase()
    .split("")
    .filter((char) => {
      return /[^\s\p{P}\p{S}]/gu.test(char);
    })
    .join("");

  let reversedString = "";

  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedString += cleanedStr.charAt(i);
  }

  return reversedString === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
