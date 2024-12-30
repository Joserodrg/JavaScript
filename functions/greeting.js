function greeting(name) {
	console.log("hello " + name + "!");
}

greeting('jose');
greeting('antonio');

let variableExterna = 1234;

function getVariableExterna() {
	console.log(variableExterna);
}

getVariableExterna();
