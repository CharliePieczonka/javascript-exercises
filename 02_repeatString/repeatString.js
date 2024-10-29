const repeatString = function(string, repeats) {
    
    if(repeats < 0){
        return 'ERROR';
    }
    
    repeated = '';
    for(let i = 0; i < repeats; i++) {
        repeated += string;
    }

    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
