function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = []
  const stack = []

  let current = root
  while (current || stack.length) {
    // Go left until we run out of nodes
    while (current) {
      stack.push(current)
      current = current.left
    }
    // Set current to the last left node we saw
    current = stack.pop()

    // Push value onto result
    result.push(current.val)

    // Look right
    current = current.right
  }

  return result
}

/* 
       1
     .   .
    2      3
   . .    .  .
  4   5  6    7
 . .
8   9

Inorder: [8, 4, 9, 2, 5, 1, 6, 3, 7]
*/
const root = new TreeNode(
  1,
  new TreeNode(
      2,
      new TreeNode(
          4,
          new TreeNode(8),
          new TreeNode(9)
      ),
      new TreeNode(5)
  ),
  new TreeNode(
      3,
      new TreeNode(6),
      new TreeNode(7)
  )
);

console.log(inorderTraversal(root))