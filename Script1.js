function PrintMe(){
    console.log("Hello to asynchrouns....");
}

setTimeout(PrintMe, 2000);

setTimeout(() => {
    console.log("This is me.!");
}, 500);