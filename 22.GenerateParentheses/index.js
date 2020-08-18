/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) {
        return []
    }

    let result = []

    const backtrack = (currentString = "", numOpen = 0, numClosed = 0) => {
        if (currentString.length === n * 2) {
            result.push(currentString)
            return
        }

        if (numOpen < n) {
            backtrack(currentString + "(", numOpen + 1, numClosed)
        }
        if (numClosed < numOpen) {
            backtrack(currentString + ")", numOpen, numClosed + 1)
        }

    }

    backtrack()

    return result
};

console.log(generateParenthesis(3))