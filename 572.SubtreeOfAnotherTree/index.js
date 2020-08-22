const checkRoots = (s, t) => {
  if (!s && !t) {
    return true;
  }

  if (s.val !== t.val) {
    return false;
  }

  // Either s or t have different leafs
  if (
    (s.left && !t.left) ||
    (t.left && !s.left) ||
    (s.right && !t.right) ||
    (t.right && !s.right)
  ) {
    return false;
  }

  return checkRoots(s.left, t.left) && checkRoots(s.right, t.right);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (!s) {
    return false;
  }

  if (s.val === t.val && checkRoots(s, t)) {
    return true;
  }

  return (!!s.left && isSubtree(s.left, t)) || (!!s.right && isSubtree(s.right, t));
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

TreeNode.prototype.toString = function () {
  return `[Root=${this.val}, Left=${
    this.left ? this.left.toString() : "null"
  }, Right=${this.right ? this.right.toString() : "null"}]`;
};

(() => {
  const sRoot = new TreeNode(
    3,
    new TreeNode(4, new TreeNode(1), new TreeNode(2)),
    new TreeNode(5)
  );

  const tRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

  console.log(`Example 1: `, isSubtree(sRoot, tRoot));
})();

(() => {
    const sRoot = new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
      new TreeNode(5)
    );
  
    const tRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
  
    console.log(`Example 2: `, isSubtree(sRoot, tRoot));
  })();