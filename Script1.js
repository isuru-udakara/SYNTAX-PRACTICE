// callback functions 
function Greet(name, callback){
    console.log("Hello "+ name);
    callback();
}

function sayBye(){
    console.log("Goodbye !");
}

Greet("Isuru", sayBye);