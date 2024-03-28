function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const sifatHeight = inchToFeet(67);
// console.log(sifatHeight);

//
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. ';
    return result; 
}
const sifatHeight2 = inchToFeet2(75);
// console.log(sifatHeight2);


//
function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const kilometer =  mileToKilometer(2);
// console.log(kilometer);

function kilometerToMiles (kilo){
    const mile=  kilo * 0.621371;
    return mile;
}

const miles =  kilometerToMiles(1);
console.log(miles);

