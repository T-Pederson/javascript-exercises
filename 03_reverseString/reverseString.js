const reverseString = function(string) {
    string = string.split('');
    let stringLength = string.length;
    let newString = [];
    for (let i = stringLength - 1, j = 0; i >=0; i--, j++) {
        newString[j] = string[i]
    }
    newString = newString.join('');
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
