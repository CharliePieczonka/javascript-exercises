const fibonacci = function(digit) {
    if(digit < 0) {
        return "OOPS";
    }

    if (digit == 0) {
        return 0;
    }
    
    let previous = 0;
    let current = 1;
    for(let i = 1; i < digit; i++) {
        let newCurr = previous + current;
        previous = current;
        current = newCurr;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
