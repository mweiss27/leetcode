/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    const findFirstIndex = () => {
        let left = 0, right = nums.length - 1
        let result = -1

        while (left <= right) {
            const mid = Math.ceil((left + right) / 2)
    
            if (nums[mid] >= target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
            
            if (nums[mid] === target) {
                result = mid
            }
        }

        return result
    }

    const findLastIndex = () => {
        let left = 0, right = nums.length - 1
        let result = -1

        while (left <= right) {
            const mid = Math.ceil((left + right) / 2)
    
            if (nums[mid] <= target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
            
            if (nums[mid] === target) {
                result = mid
            }
        }

        return result
    }

    return [findFirstIndex(), findLastIndex()]

};

console.log(searchRange([5,7,7,8,8,10], 8))