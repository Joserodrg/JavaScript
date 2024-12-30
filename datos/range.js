
function range(start, end){
    if(arguments.length < 2){
        end = start;
        start = 0;
    }

    let result = [];
    for (let i = start; i <= end; i++)
        result.push(i);
    return result;
}

console.log(range(2, 4));