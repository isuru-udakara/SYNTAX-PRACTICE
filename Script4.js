// calculator object 
const Calculator= {
    add: function(a, b){
        return a + b;
    }, 
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    },
    div: function(a, b){
        if(a == 0 || b == 0){
            return "Invalid output.";
        }else{
            return a / b;
        }
    }
}

// calling methods 
let add= Calculator.add(34, 89);
let sub= Calculator.sub(34, 12);
let mul= Calculator.mul(34, 89);
let div= Calculator.div(25, 5);
console.log("Addition: "+ add);
console.log("Subtraction: "+ sub);
console.log("Multiplication: "+ mul);
console.log("Division: "+ div);