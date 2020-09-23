/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let ni = 0
  for (let i = 0; i < nums1.length; i++) {
    if (nums2[ni] < nums1[i]) {
      // Need to insert this number before i
      nums1.splice(i, 0, nums2[ni])
      ni++
    }
  }
  for (let i = ni; i < n; i++) {
    nums1.splice(m + i, 0, nums2[i])
  }

  nums1.splice(m + n, n)
}

const arr1 = [1, 2, 3, 0, 0, 0, 0]
const arr2 = [0, 2, 5, 6]

merge(arr1, 3, arr2, 4)
console.log(arr1)
