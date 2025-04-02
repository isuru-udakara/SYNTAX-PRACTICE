function PrintMe(){
    console.log("Hello to asynchrouns....");
}

setTimeout(PrintMe, 2000);

setTimeout(() => {
    console.log("This is me.!");
}, 500);

function Greet(name, callback){
    console.log(`Hello ${name}`);
    callback();
}

function Message(){
    console.log("Hope, see you again!");
}

Greet("Isuru", Message);