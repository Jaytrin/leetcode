/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var numCounter = {};
    for(var i = 0; i < nums.length; i++){
        numCounter[nums[i]]  = numCounter[nums[i]] + 1 || 1;
    }

    for(var key in numCounter){
      if(numCounter[key] === 1){
        return key;
      }
    }
};
