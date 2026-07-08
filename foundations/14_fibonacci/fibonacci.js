const fibonacci = function (member) {
  if (typeof member === "string") {
    member = +member;
  }

  if (member < 0) {
    return "OOPS";
  } else if (member === 0) {
    return member;
  }

  let arr = [1, 1, 2, 3, 5, 8];

  for (let i = 6; i <= member - 1; i++) {
    let nextNum = arr[i - 1] + arr[i - 2];
    arr.push(nextNum);
  }

  return arr[member - 1];

  //   return arr.find((item, index) => {
  //     if (member === index + 1) {
  //       return item;
  //     }
  //   });
};

// Do not edit below this line
module.exports = fibonacci;
