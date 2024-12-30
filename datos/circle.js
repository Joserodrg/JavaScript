
function onCircle(radius){
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
console.log(onCircle(2));

// console.log(Math.random());

// console.log(Math.floor(Math.random() * 10));