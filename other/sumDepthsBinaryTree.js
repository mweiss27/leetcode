function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
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
   * @return {number}
   */
  var sumDepths = function (root, currentDepth = 1) {
    if (!root) {
      return 0;
    }
    
    if (!root.left && !root.right) {
        console.log(`Depth at ${root.val}: ${currentDepth}`)
        return currentDepth
    }

    return sumDepths(root.left, currentDepth + 1) + sumDepths(root.right, currentDepth + 1);
  };
  
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
  
  console.log(sumDepths(root))