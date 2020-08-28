/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
  const resultMap = {}
  
  for (const str of strs) {
      const sorted = str.split("").sort().join("")
      resultMap[sorted] = resultMap[sorted] || []
      resultMap[sorted].push(str)
  }

  return Object.values(resultMap)
};