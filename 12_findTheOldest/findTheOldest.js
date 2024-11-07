const findTheOldest = function(arrOfObj) {
    const currentYear = (new Date()).getFullYear();

    let sortOldest = arrOfObj.sort((a, b) =>{
        aAge = 0;
        bAge = 0;
        
        if(!("yearOfDeath" in a)) {
            aAge = currentYear - a.yearOfBirth;
        }
        else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }

        if(!("yearOfDeath" in b)) {
            bAge = currentYear - b.yearOfBirth;
        }
        else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }

        return aAge < bAge ? 1 : -1;
    });

    return sortOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
