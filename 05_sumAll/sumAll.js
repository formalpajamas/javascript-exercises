const sumAll = function(int1, int2) {
    let finalSum = 0;
    if (
        int1 > 0 && int2 > 0 &&
        Number.isInteger(int1) && Number.isInteger(int2)) {
            if (int1 < int2) {
                let i = int1;
                while (i <= int2) {
                    finalSum += i;
                    i++;
                }
            } else {
                let i = int2;
                while (i <= int1) {
                    finalSum += i;
                    i++;
                }
            } 
            return finalSum;
        } else {
            return "ERROR";
        }
};

// Do not edit below this line
module.exports = sumAll;
