function add(number1, number2){
    console.log(number1, number2)
    var sum = number1 + number2;
    return sum;
}

var total = add(80,90);
// console.log('total', total);

function bringSingara(money){
    var shingaraPrice = 10;
    var quantity = money / shingaraPrice;
    return quantity;
}
var myTaka = 130;
var shingaras = bringSingara(myTaka);
console.log('eating shingaras', shingaras);