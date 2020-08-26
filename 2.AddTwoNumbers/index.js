/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 != null || l2 != null) {
    const l1Value = l1 != null ? l1.val : 0;
    const l2Value = l2 != null ? l2.val : 0;

    let added = l1Value + l2Value + carry;
    carry = 0;
    if (added >= 10) {
      carry = 1;
      added -= 10;
    }

    current.next = new ListNode()
    current = current.next
    current.val = added;

    l1 = l1 != null ? l1.next : null;
    l2 = l2 != null ? l2.next : null;
  }

  if (carry > 0) {
    current.next = new ListNode()
    current.next.val = carry
  }

  return dummy.next;
};

let l3 = new ListNode(3)
let l2 = new ListNode(4, l3)
let l1 = new ListNode(2, l2)

let r3 = new ListNode(4)
let r2 = new ListNode(6, r3)
let r1 = new ListNode(5, r2)

console.log(printLinkedList(addTwoNumbers(l1, r1)))

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function printLinkedList(head) {
  let current = head;
  let result = "";
  while (current != null) {
    result += `${current.val} -> `;
    current = current.next;
  }

  return result;
}
