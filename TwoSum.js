// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//Brute Force Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var solutionArray = [];
    for(var i = 0; i < nums.length; i++){
        var num1 = nums[i];
        for(var u = i + 1; u < nums.length; u++){
            var num2 = nums[u];
            if(num2 === (target - num1)){
                solutionArray.push(i);
                solutionArray.push(u);
                return solutionArray;
            } else { solutionArray = false};
        }
    }
return solutionArray;
};