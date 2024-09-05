let steps = 0;
function collatz(num) {
	if (num == 1) {
		return steps;
	} else if (num % 2 == 0) {
		steps++;
		return collatz(num / 2);
	} else if (num % 2 !== 0) {
		steps++;
		return collatz(3 * num + 1);
	}
	return steps;
}

collatz(6);
console.log(steps);
