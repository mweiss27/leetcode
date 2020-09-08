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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head

  let prev = null
  while (current) {
    if (prev && prev.val === current.val) {
      // Previous and current are equal. Set previous next to current next (skip current) and leave prev pointer in-place
      prev.next = current.next
    } else {
      // Differing values, update prev pointer to current
      prev = current
    }

    current = current.next
  }

  return head
}

const t = new ListNode(3)
const r = new ListNode(3, t)
const e = new ListNode(2, r)
const w = new ListNode(1, e)
const q = new ListNode(1, w)

console.log(printLinkedList(deleteDuplicates(q)))
