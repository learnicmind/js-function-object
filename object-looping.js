// array vs object;

var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [23, 34, 23, 45];
var friendsAge = {
    rahim: 34,
    razu: 23,
    ajad: 24,
    karim: 43,
}





var shoppingCart = {
    books: 3,
    sunglass: 4,
    Keyboard: 1,
    mouse: 1,
    pen: 34
}

var keys = Object.keys(shoppingCart);
console.log(keys);

const value = Object.values(shoppingCart);
console.log(value);

// var keys = ['books'..]
// complex way
for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in 

for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}
