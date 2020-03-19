/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var solutionArray = [];
    
    for(var i = 0; i < nums.length; i++){
        var count = 0;
        for(var u = 0; u < nums.length; u++){
            if(nums[i] === nums[u]){
                u++;
            } 
            
            if(nums[u] < nums[i]){
                count += 1;
            }
        }
        solutionArray.push(count);
    }
    return solutionArray;
};
