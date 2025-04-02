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