const sumAll = function(start, end) {
    // Return ERROR if start or end are negative or not a number
    if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }
    
    // Switch start and end if start is larger than end
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    
    // Sum all numbers between and including start and end
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
