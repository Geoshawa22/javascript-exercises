const leapYears = function(year) {

/* I wrote the below as a first attempt, but it could be efficiently be written as one line
if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) {
    return true}

else {return false}}
;
*/

//Return will get the bool value of the comparison without the need for the if else
return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// Do not edit below this line
module.exports = leapYears;
