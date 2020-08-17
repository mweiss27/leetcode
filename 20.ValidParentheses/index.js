const closingBrackets = {
  [")"]: 1,
  ["]"]: 1,
  ["}"]: 1
}

const bracketMap = new Map([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"]
])

const isClosingBracket = c => !!closingBrackets[c]

const getClosingBracketForOpeningBracket = openingBracket => bracketMap.get(openingBracket)

/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
  if (!s || !s.length) {
      return true
  }
  
  if (s.length % 2 !== 0) {
      return false
  }
  
  let closingBracketStack = []
  for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i)
      if (isClosingBracket(c)) {
          if (closingBracketStack[closingBracketStack.length - 1] !== c) {
              return false
          }
          
          closingBracketStack.pop()
      } else {
          closingBracketStack.push(getClosingBracketForOpeningBracket(c))
      }
  }
  
  return closingBracketStack.length === 0
};

console.log(isValid("([]){}"))