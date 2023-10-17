const repeatString = function (word, numberOfTimes) {

    let string = "";

    if (numberOfTimes < 0) {
        return "ERROR";
    }
    else {

        for (let i = 0; i < numberOfTimes; i++) {
            string = string + word;
        }
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
