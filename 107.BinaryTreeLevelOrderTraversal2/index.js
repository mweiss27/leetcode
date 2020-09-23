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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return []
  }

  const rows = [[root.val]]

  let nodes = [root]
  while (nodes.some((n) => n != null)) {
    let values = []
    nodes = nodes.reduce((newNodes, node) => {
      if (node.left) {
        newNodes.push(node.left)
        values.push(node.left.val)
      }

      if (node.right) {
        newNodes.push(node.right)
        values.push(node.right.val)
      }

      return newNodes
    }, [])

    if (nodes.length) {
      rows.unshift(nodes.map((n) => n.val))
    }
  }

  return rows
}
