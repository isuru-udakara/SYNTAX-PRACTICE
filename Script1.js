// arrays 
const numbers= [23, 89, 34, 90, 34, 33];
console.log(numbers);

for(let x in numbers){
    console.log(numbers[x]);
}

console.log("\n");

console.log("First Item: "+ numbers[0]);
console.log("Second Item: "+ numbers[1]);
console.log("Third Item: "+ numbers[3]);

const Summation= (array) => {
    let sum= 0;
    for(let i in array){
        sum += array[i];
    }
    console.log("Sum: "+ sum);
}
Summation([23, 89, 90, 34, 78, 45]);

const values= [34, 45, 56, 67, 89, 90, 21];
console.log(values.pop());
console.log(values);

values.push(45);
values.push(25);
console.log(values);

console.log("Length of values: "+ values.length);
console.log("Length of numbers: "+ numbers.length);
