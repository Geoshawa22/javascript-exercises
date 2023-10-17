const removeFromArray = function(arrayToShorten, ...args) {
//Create Empty Array to hold filtered items
    let shortenedArray = [];

    //loops to add each item that doesn't match the arguments to
    // the empty array.
    arrayToShorten.forEach((element) => {

        //"if NOT in args, add to new array"
        if (!args.includes(element)) {
            shortenedArray.push(element);
        }
    });

return shortenedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
