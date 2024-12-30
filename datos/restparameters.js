
function max(...numbers){
    let result = -Infinity;

for(let number of numbers){
    if(number > result) result = number;
}
return result;

}
console.log(max(4, 2, 9, -2));