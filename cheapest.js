const mobiles = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 18000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 31000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black'},
];


// function getCheapestPhone(phones) {
//     let min = phones[0];
//     for(const phone of phones){
//         if(phone.price < min.price){
//             min = phone;
//         }
//     }
//     return min;
// }

// const cheap = getCheapestPhone(mobiles);
// console.log('Cheapest phone is:', cheap);


function getHighestPhone(phones) {
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const highest = getHighestPhone(mobiles);
console.log('Highest phone is:', highest);