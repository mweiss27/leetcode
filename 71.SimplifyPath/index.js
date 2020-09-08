/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = []
  const parts = path.split("/")

  for (const part of parts) {
    if (!part || part === ".") {
      // no-op
    }
    else if (part === "..") {
      stack.pop()
    } else {
      stack.push(part)
    }
  }

  return `/${stack.join("/")}`
}

console.log(simplifyPath("/a/./b/../../c/"))
console.log(simplifyPath("/a/../../b/../c//.//"))
console.log(simplifyPath("/a//b////c/d//././/.."))
console.log(simplifyPath("/a/b/.././c/"))
