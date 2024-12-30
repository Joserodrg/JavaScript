function loop(iteration) {
	let limit = 10;
	console.log('iteration: ' + iteration);

	if (iteration === limit) {
		console.log('end loop');
	} else {
		loop(iteration + 1);
	}
}

let start = 3;
loop(start);

/*
 * let start = 3; 
 * let limit = 10;
 *
 * for (let it = start; it < limit; it++) {
 *   console.log('iteration: ' + it);
 * }
 *
 * console.log('end loop');
 */
