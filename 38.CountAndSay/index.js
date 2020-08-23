/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let prev = "1";

  for (let i = 1; i < n; i++) {
    let next = "";
    let count = 1;

    for (let j = 0; j < prev.length; j++) {
      if (j > 0) {
        if (prev[j - 1] === prev[j]) {
          count++;
        } else {
          next = `${next}${count}${prev[j - 1]}`;
          count = 1;
        }
      }
    }
    next = `${next}${count}${prev[prev.length - 1]}`;
    prev = next;
  }

  return prev;
};

console.log(countAndSay(6));
