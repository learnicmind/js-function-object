var shoppingCart = {
    books: 3,
    sunglass: 4,
    Keyboard: 1,
    mouse: 1,
    pen: 34
}

var propertyName = 'sunglass';

// when you know the specific property name, use dot notation to get the property value 
var penCount = shoppingCart.pen;
// alternative system 
// when you know the specific property name, use dot notation to get the property value
// var penCount2 = shoppingCart['pen'];

// var propertyName = 'books';
// var propertyValue = shoppingCart[propertyName];
// console.log(propertyValue, propertyName);


// var properties = Object.keys(shoppingCart);
// console.log(properties); 

// var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);


// set properties value
shoppingCart.mouse = 23;
console.log(shoppingCart);

shoppingCart['mouse'] = 12;
console.log(shoppingCart);

shoppingCart[propertyName] = 45;
console.log(shoppingCart);