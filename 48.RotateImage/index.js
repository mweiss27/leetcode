/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = r; c < matrix[0].length; c++) {
            const temp = matrix[r][c]
            matrix[r][c] = matrix[c][r]
            matrix[c][r] = temp
        }
    }

    for (const row of matrix) {
        row.reverse()
    }
};

var arr = [[1,2,3],[4,5,6],[7,8,9]]
rotate(arr)
console.log(arr)