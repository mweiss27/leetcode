/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const isSetValid = (set) => {
    let seen = {};
    for (const val of set) {
      if (val === ".") {
        continue;
      } else if (seen[val]) {
        return false;
      } else {
        seen[val] = true
      }
    }
    return true;
  };

  // Validate columns
  for (let i = 0; i < 9; i++) {
    const values = board.map((row) => row[i]);
    if (!isSetValid(values)) {
      return false
    }
  }

  // Validate rows
  for (let i = 0; i < 9; i++) {
    if (!isSetValid(board[i])) {
      return false
    }
  }

  // Validate 3x3 cells
  for (let i = 0; i < 9; i++) {
    let row = 3 * Math.floor(i / 3)
    let column = 3 * (i % 3)
    const values = [
      ...board[row].slice(column, column + 3),
      ...board[row + 1].slice(column, column + 3),
      ...board[row + 2].slice(column, column + 3),
    ]
    if (!isSetValid(values)) {
      return false
    }
  }

  return true
};

const input1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const input2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(`input1: `, isValidSudoku(input1));
console.log(`input2: `, isValidSudoku(input2));
