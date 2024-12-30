let sequence = [1, 2, 3];

sequence.push(4);
sequence.push(5);

console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

array_push(sequence, 5);

function array_push(arr, value) {
    arr.push(value);
}