/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var num = "" + x;
    var nl = num.length;
    for(let i = 0, u = nl - 1; i < nl, u > 0; i++, u--){
        if(!(num[i] === num[u])){
           return false
           }
    }
    return true;
};