function add(number1, number2){
    const sum = number1 + number2;
    return sum;
}
const result1 = add(12, 13);
const result2 = add(34, 23);
const finalResult = add(result1, result2);
console.log('your final result is:', finalResult);