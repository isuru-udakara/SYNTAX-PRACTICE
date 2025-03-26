// callback functions 
function Greet(name, callback){
    console.log("Hello "+ name);
    callback();
}

function sayBye(){
    console.log("Goodbye !");
}

Greet("Isuru", sayBye);

function Force(mass, acc){
    console.log("Force: "+ (mass * acc));
}

function acceleration(velocity, time){
    return velocity / time;
}

let a= acceleration(5, 20);
Force(45, a);