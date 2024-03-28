/**
 * yaer will be a leap year if the year is divisible by 4
 */

function isLipiYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false
    }
}

const isLipi = isLipiYear(2027);
// console.log(isLipi);

/**
 * 1.Those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
 * 2.if the year is divisible by 400, then it is not a leap year
 */

function isLipiYear2(year) {
    if (year % 100 !== 0 && year % 4 ===0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }    
     else {
        return false;
    }
}

const isLipi2 = isLipiYear2(2000);
console.log(isLipi2);