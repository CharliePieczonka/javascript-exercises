const palindromes = function (string) {
    string = string.replaceAll("!" , "").replaceAll(".", "").replaceAll(",", "").toLowerCase().split(' ').join('');

    do {
        firstChar = string.slice(0, 1);
        secondChar = string.slice(-1);
        string = string.slice(1, -1);
    } while(firstChar === secondChar && string.length > 1)

    if(string.length <= 1) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
