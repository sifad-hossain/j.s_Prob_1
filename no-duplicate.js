function noDuplicate(array) {
    const unique = [];
   for (const item of array) {
    if(unique.includes(item) === false){
        unique.push(item);
    }
   }
    return unique;
}
 
let numbs = [1,5,64,74,5, 1, 5,67,74];
console.log(numbs.includes(2));

let briyaniKhor = ['sifat', 'niaz', 'lamiya', 'nabila', 'niaz', 'riyad', 'sifat', 'riyad', 'nabila']
// const uniqueArray = noDuplicate(briyaniKhor);
const uniqueArray = noDuplicate(numbs);
console.log(uniqueArray);