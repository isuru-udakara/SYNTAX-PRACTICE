// callback exercises

const force= (mass, acceleration) => {
    try{
        return (mass * acceleration).toFixed(2);
    } catch(err){
        return err;
    }};
console.log(force(23, 2.1));

const Concentration= (mole, volume) => Math.round((mole/volume) * 100)/100;
console.log(`Concentration: ${Concentration(3.4, 300)} molem-3`);


// check pv = nRT
function check(part1, part2){
    if(part1(2e5, 3e3) == part2(3e-2, 400)){
        console.log("Equation is balanced.");
    }else{
        console.log("Equation is not balanced.");
    }
}

check((p, v) => {
    return (p * v).toFixed(2);
}, (n, T) => {
    return (n * 3.233e4 * T).toFixed(2);
});