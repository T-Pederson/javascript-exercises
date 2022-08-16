const leapYears = function(year) {
    // Check if a year is divisible by 4 and not by 100 unless multiple of 400
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
