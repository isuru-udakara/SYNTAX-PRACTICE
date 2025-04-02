function square(num){
    return num * num;
}

function processArray(arr, callback){
    const newArr= [];
    for(n in arr){
        newArr.push(callback(arr[n]));
    }
    console.log(newArr);
}

processArray([1, 2, 3], square);