/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
        return false;
    }

    let num = x.toString();

    let reversed = num.split('').reverse().join('');

    if(num === reversed){
        return true;
    } else {
        return false;
    }
    
};