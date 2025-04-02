// practicing callback

function greet(callback){
    callback("Alice");
}

greet((name) => {console.log(`Hello ${name}!`)});