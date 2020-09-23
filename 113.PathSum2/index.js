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
var pathSum = function (root, sum) {
  const result = []
  if (!root) {
    return result
  }

  const dive = (node = root, currentPath = []) => {
    if (!node) {
      return
    }

    if (!node.left && !node.right) {
      const pathToLeaf = [...currentPath, node.val]
      // This is a leaf, let's check our current sum
      const currentSum = pathToLeaf.reduce((total, val) => total + val, 0)
      if (currentSum === sum) {
        result.push(pathToLeaf)
      }
    } else {
      if (node.left) {
        dive(node.left, [...currentPath, node.val])
      }

      if (node.right) {
        dive(node.right, [...currentPath, node.val])
      }
    }
  }

  dive()
  return result
}
