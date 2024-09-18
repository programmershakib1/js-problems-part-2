const dihsa = 56;
const salman = 95;

if(dihsa > salman){
    console.log('Disha will get the strawberry')
}
else{
    console.log('Salman will get the strawberry')
}

// inside a function
function getMax(num1, num2) {
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(90, 60);
const max2 = getMax(54, 32);
const ultimateMax = getMax(82, 68);
console.log('max of two is:', ultimateMax);