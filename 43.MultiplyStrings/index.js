/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const products = Array(num1.length + num2.length).fill(0)
  for (let i = num1.length - 1; i >= 0; i--) {
    let carry = 0

    for (let j = num2.length - 1; j >= 0; j--) {
      products[i + j + 1] += num1[i] * num2[j] + carry
      carry = Math.floor(products[i + j + 1] / 10)
      products[i + j + 1] = products[i + j + 1] % 10
    }
    products[i] += carry
  }

  return products.join("").replace(/^0*(\d)/, "$1")
}

// console.log(multiply("123456789", "987654321"), "121932631112635269")
// console.log(multiply("498828660196", "840477629533"), "419254329864656431168468")
console.log(multiply("0", "0"))

/* 
123
 13



*/
