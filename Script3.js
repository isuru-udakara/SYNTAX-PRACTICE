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