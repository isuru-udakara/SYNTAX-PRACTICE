function task1(callback){
    setTimeout(() => {
        console.log("Press the Open button.");
        callback();
    }, 2000);
}