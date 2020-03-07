/** Roman to Integer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanNumObj = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
        "IV" : 4,
        "IX" : 9,
        "XL" : 40,
        "XC" : 90,
        "CD" : 400,
        "CM" : 900
    };
    var romanNumInt = 0;
    
    for(var i = 0; i < s.length; i++){
        if(romanNumObj[s[i] + s[i+1]]){
           romanNumInt += romanNumObj[s[i] + s[i+1]];
            i++;
           } else {
               romanNumInt += romanNumObj[s[i]];
           }
    }
    return romanNumInt;
};