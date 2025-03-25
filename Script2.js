const Person= {
    fname: "Holand",
    lname: "Dover",
    age: 23
};

// empty object 
const Computer= {};

// add properties 
Computer.RAM= 4;
Computer.SSD= 500;
Computer.Brand= "Lenovo";
Computer.OS= "Windows";
Computer.CPU= "Inter i5";

// using new keyword 
const Human= new Object();
Human.gender= "Female";
Human.age= 27;
Human.skin_tone= "brown";
Human.height= 6.5;
Human.weight= 69;

// accessing Computer object 
console.log("RAM: "+ Computer.RAM);
console.log("SSD: "+ Computer.SSD);
console.log("Brand: "+ Computer.Brand);
console.log("Operating System: "+ Computer.OS);
console.log("CPU: "+ Computer.CPU);

// accessing object properties 
console.log("Gender"+ Human.gender);
console.log("Age: "+ Human.age);
console.log("Skin Tone: "+ Human.skin_tone);
console.log("Height: "+ Human.height);