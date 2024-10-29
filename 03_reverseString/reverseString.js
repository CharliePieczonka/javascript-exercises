const reverseString = function(string) {
    let reverse = '';
    let stringLength = string.length;

    for (let i = string.length; i > 0; i--) {
        reverse += string.substring(i-1, i);
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
