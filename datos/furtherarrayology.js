
let todoList = [];
function r4member(task){
    todoList.push(task);
}

function getTask(){
    return todoList.shift();
}

function rememberUrgently(task){
    todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));    
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

