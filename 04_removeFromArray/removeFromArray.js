const removeFromArray = function(array) {
    let filteredArray = array;
    numRemove = arguments.length - 1;

    for(let i = 1; i <= numRemove; i++){
        filteredArray = filteredArray.filter(x => x !== arguments[i]);
    }
    
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
