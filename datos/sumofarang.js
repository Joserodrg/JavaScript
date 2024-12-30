
function range(init, end){
let array  = [];

if(init <= end){
    for(let i = init; i <= end; i++){
        array.push(i);
    }
}else{
    for(let i = init; i>=end; i--){
        array.push(i);
        }
    }
    return array;
}


function sum(array){
let total = 0;
for(let n of array){
    total += n;
}
    return total;
}

console.log(range(1, 10))
console.log(sum(range(1, 10)))