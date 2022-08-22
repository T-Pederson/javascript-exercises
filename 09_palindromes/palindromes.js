const palindromes = function (words) {
    words = words.toLowerCase();
    words = words.replace(/[!,.\s]/g, "");
    let newWords = "";
    for(let i = words.length - 1; i >= 0; i--) {
        newWords += words[i];
    }
    if (newWords === words) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
