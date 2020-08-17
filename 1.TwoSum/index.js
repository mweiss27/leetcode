/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const lookup = {}
    
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i]
        if (lookup[compliment] != null) {
            return [lookup[compliment], i]
        }
        
        lookup[nums[i]] = i
    }
};
