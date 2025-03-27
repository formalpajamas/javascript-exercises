const removeFromArray = function(array, ...item) {
    item.forEach((item) => {
        let i = 0;
        while (i < array.length) {
            if (array[i] === item) {
                array.splice(i, 1);
            } else {
                i++;
            }
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
