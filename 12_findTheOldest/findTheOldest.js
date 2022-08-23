const findTheOldest = function(array) {
    let oldestAge = 0;
    let oldestPerson = {};
    for(obj of array) {
        if ("yearOfDeath" in obj === false) {
            let currentYear = new Date().getFullYear();
            if (currentYear - obj.yearOfBirth > oldestAge) {
                oldestAge = currentYear - obj.yearOfBirth;
                oldestPerson = obj;
            }
        } else if (obj.yearOfDeath - obj.yearOfBirth > oldestAge) {
                oldestAge = obj.yearOfDeath - obj.yearOfBirth;
                oldestPerson = obj;
            }
        }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
