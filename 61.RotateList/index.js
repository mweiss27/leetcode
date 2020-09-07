function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const printLinkedList = (head) => {
  let current = head
  let result = ""
  while (current != null) {
    result += `${current.val} -> `
    current = current.next
  }

  return result
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let length = 0
  let current = head

  const lookup = {}

  while (current != null) {
    lookup[length++] = current
    current = current.next
  }

  const toRotate = k % length
  if (toRotate > 0) {
    // Set current last node.next to first
    lookup[length - 1].next = lookup[0]
    lookup[length - (toRotate+1)].next = null
    return lookup[length - toRotate]
  }

  return head
  // console.log(`Length: ${length}, Tail: ${lookup[length-1].val}, ToRotate: ${toRotate}`)
}

const t = new ListNode(5)
const r = new ListNode(4, t)
const e = new ListNode(3, r)
const w = new ListNode(2, e)
const q = new ListNode(1, w)

console.log(printLinkedList(rotateRight(q, 6)))
