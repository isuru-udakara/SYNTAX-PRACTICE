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