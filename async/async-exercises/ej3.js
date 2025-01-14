let i;
for (i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
    console.log('valor de i en cada iteración: ' + i);
}
console.log('valor de i después del for: ' + i);
// i = 3


