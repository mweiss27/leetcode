/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const products = []

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let placesShift = num1.length - i + (num2.length - j) - 2

      const result = +num1[i] * +num2[j] * Math.pow(10, placesShift)
      if (result > 0) {
        products.push(`${result}`)
      }
    }
  }

  products.sort((a, b) => a - b)
  console.log(products.join(','))
  return products.reduce((result, current) => {
    // console.log(`Adding '${current}' to our current result of '${result}'`)
    if (!result) {
      return `${current}`
    }

    let nextResult = ""
    let i = result.length - 1
    let j = current.length - 1
    let carry = 0
    while (i >= 0 || j >= 0) {
      const rNum = result[i--] || 0
      const cNum = current[j--] || 0
      let added = +rNum + +cNum + carry
      carry = 0
      if (added >= 10) {
        carry = 1
        added -= 10
      }

      nextResult = `${added}${nextResult}`
    }
    if (carry > 0) {
      nextResult = `${carry}${nextResult}`
    }

    return nextResult
  }, "")
}

// console.log(multiply("123456789", "987654321"), "121932631112635269")
console.log(multiply("498828660196", "840477629533"), "419254329864656431168468")
// console.log(multiply("123", "123"))

/* 
123
 13



*/
