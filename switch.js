const color = 'blue';

if (color === 'red'){
    console.log('you are my red friend');
}
else if (color === 'yellow'){
    console.log('you are my yellow friend');
}
else if (color === 'green'){
    console.log('you are my green friend');
}
else if (color === 'blue'){
    console.log('you are my blue friend');
}
else if (color === 'black'){
    console.log('you are my black friend');
}
else{
    console.log('you are not my friend');
}

// switch 


switch(color){
    case 'green':
        console.log('you are my green friend');
        break;
    case 'yellow':
        console.log('you are my yellow friend');
        break;
    case 'red':
        console.log('you are my red friend');
        break;
    case 'black':
        console.log('you are my black friend');
        break;
    case 'blue':
        console.log('you are my blue friend');
        break;
    default:
        console.log('you are not my friend');
}