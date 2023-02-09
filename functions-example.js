// function alu(price){
//     var aluPrice = 20;
//     var quantity = price / aluPrice;
//     return quantity;
// }

// var alurkhalu = alu(400);
// var alus = alu(alurkhalu);

// console.log('alu pab:', alus);


function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 57;
const assignment2Marks = 49;
const assignment3Marks = 60;

const myaverage = getAverage(assignment1Marks , assignment2Marks, assignment3Marks);

console.log('my average so far: ', myaverage);