// for loop
for(let i= 0; i < 10; i++){
    console.log("This "+ i);
}

function factorial(n){
    if(n == 1 || n == 0){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

let sum= 0;
for(let i= 2; i < 10; i++){
    sum += (factorial(i) + factorial(i - 1));
}
console.log("Sum: "+ sum);