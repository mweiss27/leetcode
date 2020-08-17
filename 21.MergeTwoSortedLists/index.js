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
var mergeTwoLists = function(l1, l2) {
  var result
  var current
  
  const appendToList = node => {
      if (current == null) {
          result = node
          current = node
      } else {
          current.next = node
          current = node
      }
  }
  
  while (l1 != null && l2 != null) {
      if (l1 != null && l2 != null) {
          if (l1.val < l2.val) {
              appendToList(l1)
              l1 = l1.next
          } else {
              appendToList(l2)
              l2 = l2.next
          }
      } else if (l1 != null) {
          appendToList(l1)
          l1 = l1.next
      } else {
          appendToList(l2)
          l2 = l2.next
      }
  }
  
  return result
};