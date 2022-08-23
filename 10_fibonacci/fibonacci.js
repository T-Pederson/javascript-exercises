const fibonacci = function(number) {
    if(number < 0) {
        return "OOPS";
    } else if(number == 0) {
        return 0;
    } else {
        let firstNumber = 0;
        let secondNumber = 1;
        let tempNumber = 1;
        for(let i = 1; i < number; i++) {
            tempNumber = secondNumber;
            secondNumber += firstNumber;
            firstNumber = tempNumber;
        }
        return secondNumber;
    }

};

// Do not edit below this line
module.exports = fibonacci;
