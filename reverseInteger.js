/** Given a 32-bit signed integer, reverse digits of an integer.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var numString = "" + x;
    var reversedNum = "";
    var numSign = 1;
    
    if(isNaN(numString[0])){
        numSign = -1;
    }

    for(let i = numString.length; i >= 0; i--){
        if(!isNaN(numString[i])){
            reversedNum += numString[i];
        }
    }
    
    return numSign * Math.abs(reversedNum);
};