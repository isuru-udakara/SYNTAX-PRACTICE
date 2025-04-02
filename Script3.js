// callback exercises

const force= (mass, acceleration) => {
    try{
        return (mass * acceleration).toFixed(2);
    } catch(err){
        return err;
    }};
console.log(force(23, 2.1));