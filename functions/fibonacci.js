
function fib (t){

if (t === 0){
    return 0;
}

if (t === 1){
    return 1;
    }

if (t > 1){
    return fib(t-1) + fib(t-2);
    }

}

console.log(fib(7));
