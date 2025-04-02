function task1(callback){
    setTimeout(() => {
        console.log("Press the Open button.");
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Wait till the tray comes out.");
        callback();
    }, 2500);
}

task1(() => {
    task2(() => {
        console.log("Put your gun on the tray.");
    })
})