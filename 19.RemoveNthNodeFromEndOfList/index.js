function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const printLinkedList = (head) => {
  let current = head;
  let result = "";
  while (current != null) {
    result += `${current.val} -> `;
    current = current.next;
  }

  return result;
};

/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let indexDict = {};
  let current = head;
  let length = 0;
  while (current != null) {
    indexDict[length++] = current;
    current = current.next;
  }

  const nodeToRemove = length - 1 - (n - 1);
  if (nodeToRemove === 0) {
      // Case where node is first
      return head.next
  } else if (nodeToRemove === length - 1) {
      // Case where node is last
      indexDict[length - 2].next = null
  } else {
      // Case where node has previous/next
      indexDict[nodeToRemove - 1].next = indexDict[nodeToRemove + 1]
  }

  return head
};

const y = new ListNode(6);
const t = new ListNode(5, y);
const r = new ListNode(4, t);
const e = new ListNode(3, r);
const w = new ListNode(2);
const q = new ListNode(1, w);

removeNthFromEnd(q, 1);
console.log(printLinkedList(q));
