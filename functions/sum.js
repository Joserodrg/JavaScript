function sum(a, b) {
	return a + b;
}

function identity(value) {
	return value;
}

function literal10() {
	return 10;
}

// sum(3, 7);

for (let i = 0; i < sum(3, 7); i++) {
	console.log(i);
}

for (let i = 0; i < 3 + 7; i++) {
	console.log(i);
}

for (let i = 0; i < 10; i++) {
	console.log(i);
}


for (let i = 0; i < identity(15); i++) {
	console.log(i);
}

for (let i = 0; i < literal10(); i++) {
	console.log(i);
}

