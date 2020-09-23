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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }

  const areSubtreesSymmetric = (leftRoot, rightRoot) => {
    if (leftRoot && rightRoot) {
      // The roots themselves must match
      if (leftRoot.val !== rightRoot.val) {
        return false
      }

      // Continue on comparing the inside and outside subtrees
      return areSubtreesSymmetric(leftRoot.left, rightRoot.right) && areSubtreesSymmetric(leftRoot.right, rightRoot.left)
    } else {
      return !leftRoot && !rightRoot
    }
  }

  return areSubtreesSymmetric(root.left, root.right)
}
