const sumAll = function(min, max) {
    
    if(min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)
        || isNaN(min) || isNaN(max)) {
        return "ERROR";
    }
    
    let sum = 0;
    let placeholder = 0;

    if(min > max) {
        placeholder = max;
        max = min;
        min = placeholder;
    }

    for(let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
