/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var obj = {};
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        } else{
            nums.splice(i,1);
            i--;
        }
    }
    return Object.keys(obj).length;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
    for(let i = 0; i < nums.length - 1; i++){
       if(nums[i] === nums[i+1]){
           nums.splice(i,1);
           i--;
       }
    }
    return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates3 = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
};

