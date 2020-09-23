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

  const isLayerSymmetric = (layer) => {
    // We only need to consider the case where layer's length is even
    let i = 0,
      j = layer.length - 1
    while (i < j) {
      if (layer[i] && layer[j]) {
        if (layer[i].val !== layer[j].val) {
          return false
        }
      } else if ((layer[i] && !layer[j]) || (!layer[i] && layer[j])) {
        return false
      }
      i++
      j--
    }

    return true
  }

  let nodes = [root.left, root.right]
  while (nodes.length > 0) {
    if (!isLayerSymmetric(nodes)) {
      return false
    }

    // Navigate to the next layer of the tree
    nodes = nodes.reduce((result, node) => [...result, node ? node.left : null, node ? node.right : null], [])
    if (nodes.every((n) => !n)) {
      break
    }
  }

  return true
}

const root = new TreeNode(
  1, 
  new TreeNode(2, 
    new TreeNode(3), 
    new TreeNode(4)
  ), 
  new TreeNode(2, 
    new TreeNode(4), 
    new TreeNode(3)
  )
)

console.log(isSymmetric(root))
