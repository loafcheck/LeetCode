/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var words = s.split(" ");
    var deletedSpaceArr = words.filter((currentValue)=>{return currentValue !== ''});
    var lastVocab = deletedSpaceArr[deletedSpaceArr.length -1];
       return lastVocab.length;
};

/**
*
*
*/
