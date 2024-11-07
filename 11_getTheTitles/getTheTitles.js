const getTheTitles = function(arrayOfObj) {
    let titles = arrayOfObj.map(book => book.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
