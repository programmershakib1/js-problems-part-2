// task 1

// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

// const lowest = [167, 190, 120, 165, 137];
// function lowestNumber(numbers) {
//     let result = numbers[0];
//     for(const number of numbers){
//         if(number < result){
//             result = number;
//         }
//     }
//     return result;
// }

// const result = lowestNumber(lowest);
// console.log(result);



// task 2

// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(array) {
    
}



// task 3

// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

// function calculate(laptop, tablet, mobile) {
//     const laptopCost = 35000;
//     const tabletCost = 15000;
//     const mobileCost = 20000;

//     const laptopTotal = laptopCost * laptop;
//     const tabletTotal = tabletCost * tablet;
//     const mobileTotal = mobileCost * mobile;

//     const totalPrice = laptopTotal + tabletTotal + mobileTotal;

//     return totalPrice;
// }

// const result = calculate(2, 0, 2);
// console.log(result);



// task 4

// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];



// task 5

// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];













const heights2 = ['rahim', 'roben', 'rafi', 'ron', 'rashed'];

let smallestName = heights2[0];

for (let i = 1; i < heights2.length; i++) {
  if (heights2[i].length < smallestName.length) {
    smallestName = heights2[i];
  }
}

console.log(smallestName); // Output: ron


const small = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(array) {
    let small = array[0];
    for(let i = 1; i < array.le)
}