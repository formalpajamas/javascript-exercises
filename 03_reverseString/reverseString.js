// get length of string and loop that amount of time, each time taking the next letter
const reverseString = function(string) {
    let newString = "";
    let i = string.length;
    while (i > 0) {
        newString += string[i-1];
        i--;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
