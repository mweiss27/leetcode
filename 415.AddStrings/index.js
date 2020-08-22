/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let result = "";
  let carry = 0;
  const maxLength = Math.max(num1.length, num2.length);

  for (let i = 0; i < maxLength; i++) {
    const n1 = num1[num1.length - 1 - i];
    const n2 = num2[num2.length - 1 - i];

    let added;
    if (n1 && n2) {
      const n1NumericValue = n1.charCodeAt(0) - "1".charCodeAt(0) + 1;
      const n2NumericValue = n2.charCodeAt(0) - "1".charCodeAt(0) + 1;
      added = n1NumericValue + n2NumericValue + carry;
    //   console.log(`(1) ${n1NumericValue} + ${n2NumericValue} + ${carry} = ${added}`)
    } else {
      const numericValue = n1
        ? n1.charCodeAt(0) - "1".charCodeAt(0) + 1
        : n2.charCodeAt(0) - "1".charCodeAt(0) + 1;
      added = numericValue + carry;
    //   console.log(`(2) ${numericValue} + ${carry} = ${added}`)
    }
    carry = 0;
    if (added > 9) {
      carry = 1
      added -= 10;
    }

    result = `${added}${result}`;
  }

  if (carry) {
      result = `${carry}${result}`
  }

  return result;
};

console.log(addStrings("123", "123") == 123 + 123)
console.log(addStrings("123", "1234") == 123 + 1234);
console.log(addStrings("321", "123") == 321 + 123)
console.log(addStrings("415", "415") == 415 + 415);
console.log(addStrings("455", "455") == 455 + 455);
console.log(addStrings("1", "9") == 1 + 9);
