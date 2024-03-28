/**
 * Task:
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

/**
 * 1.Put odd number in array
 */


//step-01:
// function oddAverage(numbers) {
//     console.log(numbers);   
// }

// const numbers = [42, 13, 58, 65, 81];
// const avg = oddAverage(numbers);
// console.log('average of the odd numbers is: ', avg);


//step-02:
// function oddAverage(numbers){
//    for(const number of numbers) {
//     console.log(number); 
//    }
// }

// const numbers = [42, 13, 58, 65, 81];
// const avg = oddAverage(numbers);
// console.log('average of the odd numbers is: ', avg);


// //step-03:
// function oddAverage(numbers){
//     for(const number of numbers) {
//         if (number % 2 === 1) {
//                 console.log(number); 
//         }
//     }
//  }
 
//  const numbers = [42, 13, 58, 65, 81];
//  const avg = oddAverage(numbers);
//  console.log('average of the odd numbers is: ', avg);


// //step-03:
// function oddAverage(numbers){
//     const odds = [];
//     for(const number of numbers) {
//         if (number % 2 === 1) {
//                 // console.log(number); 
//                 odds.push(number);
//         }
//     }
//     //odds is the array that contains only the odd numbers
//     console.log(odds);
//  }
 
//  const numbers = [42, 13, 58, 65, 81, 7, 96];
//  const avg = oddAverage(numbers);
//  console.log('average of the odd numbers is: ', avg);


// //step-04:
// function oddAverage(numbers){
//     const odds = [];
//     for(const number of numbers) {
//         if (number % 2 === 1) {
//                 // console.log(number); 
//                 odds.push(number);
//         }
//     }
//     //odds is the array that contains only the odd numbers
//     // console.log(odds);
//     let sum = 0;
//     for (const number of odds){
//         sum = sum + number;        
//     }
//     console.log(sum);
//  }
 
//  const numbers = [42, 13, 58, 65, 81, 7, 96];
//  const avg = oddAverage(numbers);
//  console.log('average of the odd numbers is: ', avg);


// //step-05:
// function oddAverage(numbers){
//     const odds = [];
//     for(const number of numbers) {
//         if (number % 2 === 1) {
//                 // console.log(number); 
//                 odds.push(number);
//         }
//     }
//     //odds is the array that contains only the odd numbers
//     // console.log(odds);
//     let sum = 0;
//     for (const number of odds){
//         sum = sum + number;        
//     }
//     const count = odds.length;
//     console.log(sum, count);
//  }
 
//  const numbers = [42, 13, 58, 65, 81, 7, 96];
//  const avg = oddAverage(numbers);
//  console.log('average of the odd numbers is: ', avg);


//step-06:
function oddAverage(numbers){
    const odds = [];
    for(const number of numbers) {
        if (number % 2 === 1) {
                // console.log(number); 
                odds.push(number);
        }
    }
    //odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for (const number of odds){
        sum = sum + number;        
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
 }
 
 const numbers = [42, 13, 58, 65, 81, 7, 96];
 const avg = oddAverage(numbers);
 console.log('average of the odd numbers is: ', avg);