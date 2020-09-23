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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const isSubtreeSame = (root1, root2) => {
    if (root1 && root2) {
      return root1.val === root2.val && isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
    } else if (!root1 && !root2) {
      return true
    }

    return false
  }

  return isSubtreeSame(p, q)
}
