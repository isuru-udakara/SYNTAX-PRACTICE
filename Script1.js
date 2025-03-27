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

// calculate pv= nRT , v= nRT/p 
const equation= (nRT, p) => {
    return nRT() * p(); // callback function calls
}
// passing callback function
console.log("Ans: ", equation(() => {
    return 4 * 3.88 * 340;
}, () => {
    return 7890;
}));