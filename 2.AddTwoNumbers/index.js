function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var toOrderedArray = function(l1) {
  const result = []
  let current = l1
  while (current != null) {
    result.unshift(current.val)
    current = current.next
  }

  return result
}

var toReversedLinkedList = function(arr) {
  const nodes = arr.reverse().map(element => new ListNode(element, null))
  arr.forEach((element, index) => {
    nodes[index].next = nodes[index + 1] || null
  })

  return nodes[0]
}

var digitsArrayToNumber = function(arr) {
  return parseInt(arr.join(""))
}

var numberToDigitsArray = function(val) {
  return Number(val)
    .toLocaleString('fullwide', {useGrouping:false})
    .split("")
    .map(digitStr => parseInt(digitStr))
}

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
  const orderedArr1 = toOrderedArray(l1)
  const orderedArr2 = toOrderedArray(l2)
  console.log(`orderedArr1: `, orderedArr1, `orderedArr2: `, orderedArr2)
  
  const arr1Value = digitsArrayToNumber(orderedArr1)
  const arr2Value = digitsArrayToNumber(orderedArr2)
  console.log(`arr1Value: `, arr1Value, `arr2Values: `, arr2Value)

  const result = arr1Value + arr2Value;
  console.log(`result: `, result)

  const resultDigitsArray = numberToDigitsArray(result)
  console.log(`resultDigitsArray: `, resultDigitsArray)
  
  const r1 = toReversedLinkedList(resultDigitsArray)

  return r1
};


const arr1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
const arr2 = [5,6,4]

const l1 = toReversedLinkedList(arr1.reverse())
const l2 = toReversedLinkedList(arr2.reverse())

console.log(addTwoNumbers(l1, l2))