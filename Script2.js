const Force= (mass, acceleration) => {
    console.log("Force: "+ (mass * acceleration));
}
Force(4000, 7);
Force(4590, 8.67);

// s= v + at
const Distance= (velocity, acceleration, time) => {
    console.log("Distance: "+ (velocity + (acceleration * time)));
}

Distance(2, 0.6, 20);