// practicing callback

function greet(callback){
    callback("Alice");
}

greet((name) => {console.log(`Hello ${name}!`)});

// calculate concentrate
function Concentrate(callback){

    callback(0.4, 200);
    callback(2, 3000);
}

Concentrate((mole, volume) => {console.log(`${mole/volume}molem-3 `)});

// function to process array
function processArray(arr, callback){
    const newArr= [];
    for(n in arr){
        newArr.push(callback(arr[n]));
    }
    return newArr;
}

const numbers= [1, 2, 3, 4, 5, 6];
const squared = processArray(numbers, (num) => num * num);
console.log(squared);