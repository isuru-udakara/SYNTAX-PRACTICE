// object methods
const Person= {
    fname: "Kevin",
    lname: "Seth",
    fullName: function(){
        return this.fname + this.lname;
    }
};

// accessing method in object 
console.log(Person.fullName());