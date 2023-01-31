/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let result = '';
    for (let i = 0 ; i < address.length ; i++) {
        let character = address[i]
        if (character === ".") {
            result = result + '[.]'
        }else result = result + character
    }
    return result;
};

