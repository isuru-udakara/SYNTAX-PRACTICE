const ports= [3993, 9933, 8233, 9033, 5300];

for(let prt in ports){
    console.log("Available porst: "+ ports[prt]);
}

const msgs= {
    day1: function(){
        return "Hello, I want to talk to you.";
    },
    day2: function(){
        return "Hey, are you there?";
    },
    day3: function(){
        return "This is not what I expected.";
    },
    day4: function(){
        return "You have to stop this.";
    }
}

for(key in msgs){
    console.log(msgs[key]());
}