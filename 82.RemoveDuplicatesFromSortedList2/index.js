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

const createLinkedList = (nums) => {
  let head = new ListNode(nums[0])
  let current = head
  for (const num of nums.slice(1)) {
      current.next = new ListNode(num)
      current = current.next
  }
  return head
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
  // Our lookup will be values
  const lookup = {}
  const blacklist = {}

  let current = head
  while (current != null) {
    if (!lookup[current.val] && !blacklist[current.val]) {
      lookup[current.val] = current
    } else {
      // We've seen this value before. It's not unique.
      // Delete it from our lookup and blacklist it
      delete lookup[current.val]
      blacklist[current.val] = 1
    }

    current = current.next
  }

  const uniqueNodes = Object.values(lookup).sort((a, b) => a.val - b.val)
  let dummyHead = new ListNode()
  current = dummyHead
  for (const node of uniqueNodes) {
    node.next = null
    current.next = node
    current = current.next
  }

  return dummyHead.next
}

const list = createLinkedList([-3,-1,-1,0,0,0,0,0,2])
console.log(printLinkedList(list))

console.log(printLinkedList(deleteDuplicates(list)))
