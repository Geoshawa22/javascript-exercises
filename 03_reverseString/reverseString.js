
/* I made a functional, but not ideal function to reverse the string. It does the job
but in a brute force sort of way. 


const reverseString = function (stringToReverse) {
  let reversedString = "";
  let lastCharacter = "";
  let stringToSlice = stringToReverse;

  for (let i = 0; i < stringToReverse.length; i++) {
    lastCharacter = stringToSlice.charAt(stringToSlice.length - 1);
    reversedString += lastCharacter;
    stringToSlice = stringToSlice.slice(0, stringToSlice.length - 1);
  }

  return reversedString;
};
*/

let reverseString = function (stringToReverse){

    //Split turns the string into an array
    //Reverse() reverses the array
    // Join() turns the array back into a string.

    return stringToReverse.split("").reverse().join("");

}


// Do not edit below this line
module.exports = reverseString;
