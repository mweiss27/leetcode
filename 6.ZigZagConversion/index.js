/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }
  
  let matrix = [];
  let r = 0;
  let c = 0;
  let maxColumns =
    numRows === 1 ? s.length : s.length / (numRows - (numRows - 2));
  let rowDirection = 1;
  let stringIndex = 0;
  let zagging = false;

  while (c <= maxColumns) {
    if (matrix[r] == null) {
      matrix[r] = [];
    }

    // console.log(`Setting r=${r}, c=${c} = ${s[stringIndex]}`)
    matrix[r][c] = s[stringIndex];
    stringIndex++;

    if (r + rowDirection >= numRows) {
      rowDirection = -1;
      zagging = true;
    } else if (r + rowDirection < 0) {
      rowDirection = 1;
      zagging = false;
    }

    r += rowDirection;

    if (zagging) {
      c++;
    }
  }

  // for (const row of matrix) {
  //   console.log(row.join("\t"));
  // }

  return matrix
    .map((row) => row.filter((letter) => !!letter).join(""))
    .join("");
};

console.log(convert("ABCDEFG", 1));
