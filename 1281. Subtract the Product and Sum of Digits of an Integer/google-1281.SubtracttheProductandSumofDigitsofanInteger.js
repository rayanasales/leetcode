var subtractProductAndSum = function (num) {
  let numAsStr = num.toString();
  let product = 1;
  let sum = 0;

  for (let i = 0; i < numAsStr.length; i++) {
    let current = Number(numAsStr[i]);
    product *= current;
    sum += current;
  }

  return product - sum;
};
