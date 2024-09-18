const jim = 56;
const tim = 89;
const kim = 90;

if(jim > tim && jim > kim){
    console.log('JIm is the ultimate boss');
}
else if(tim > jim && tim > kim){
    console.log('Tim is the ultimate boss')
}
else{
    console.log('Kim is the ultimate boss')
}

function getMax3(num1, num2, num3) {
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const max3 = getMax3(55, 32, 90);
console.log('max is', max3);


const max = Math.max(5, 5, 71, 65, 46, 6);
console.log('max is using Math.max', max);