const today = new Date();
const date = new Date('2054-10-19');
console.log(date.getMonth());
console.log(date.getDate());

const specificDate = new Date(2031, 0, 25)
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString('en-GB'));


// unix epox 