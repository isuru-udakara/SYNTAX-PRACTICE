const greet = (name, msg) => {
    console.log("Hello ! "+ name);
    msg(); // callback function call
}

// callback function 
const msg= () => {
    console.log("Good Morning, Have a nice day.");
}

// function call 
greet("Isuru", msg);