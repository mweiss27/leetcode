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
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(null, head);
  let previous = dummy;
  let current = head;

  const swapPair = (prev, node1, node2) => {
    // A -> B -> C -> D
    // Want A -> C -> B -> D
    // 
    const next = node2.next;
    node2.next = node1;
    prev.next = node2;
    node1.next = next;
  };

  let iteration = 1;
  while (current != null && iteration++ < 1000) {
    //
    // node1 -> A
    // node2 -> B
    // A  -> B
    const node1 = current;
    const node2 = node1.next;
    if (node2 != null) {
      swapPair(previous, node1, node2);

      // node1 -> A
      // node2 -> B
      // B -> A
      current = node1.next;
      previous = node2.next;
    } else {
      break;
    }
  }

  return dummy.next;
};

const t = new ListNode(5);
const r = new ListNode(4, t);
const e = new ListNode(3, r);
const w = new ListNode(2, e);
const q = new ListNode(1, w);

const newHead = swapPairs(q);
console.log(printLinkedList(newHead));
