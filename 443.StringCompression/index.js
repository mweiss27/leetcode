/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (!chars.length) {
    return [];
  }

  let startIndex = 0;
  let count = 1;

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[startIndex]) {
      count++;
    } else {
      if (count > 1) {
        const toInsert = count.toString().split("");
        chars.splice(startIndex + 1, count - 1, ...toInsert);
        i = startIndex + toInsert.length + 1;
      } else {
        chars.splice(startIndex + 1, count - 1);
        i = startIndex + 1;
      }
      startIndex = i;
      count = 1;
    }
  }
  if (count > 1) {
    const toInsert = count.toString().split("");
    chars.splice(startIndex + 1, count - 1, ...toInsert);
  }

  return chars.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
