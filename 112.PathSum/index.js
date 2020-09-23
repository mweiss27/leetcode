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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false
  }

  const dive = (node, currentPath = []) => {
    if (!node) {
      return
    }

    if (!node.left && !node.right) {
      const pathToLeaf = [...currentPath, node.val]
      // This is a leaf, let's check our current sum
      const currentSum = pathToLeaf.reduce((total, val) => total + val, 0)
      return currentSum === sum
    } else {
      if (node.left && dive(node.left, [...currentPath, node.val])) {
        return true
      }

      if (node.right && dive(node.right, [...currentPath, node.val])) {
        return true
      }
    }

    return false
  }

  return dive(root, [])
}
