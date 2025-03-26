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

// distance
let distance= (part1, part2) => {
    console.log(part1 + part2);
}

function part1(v, t){
    return v / t;
}

function part2(a, t){
    return a * t * t / 2;
}

let p1= part1(3, 10);
let p2= part1(2, 10);
distance(p1, p2);
