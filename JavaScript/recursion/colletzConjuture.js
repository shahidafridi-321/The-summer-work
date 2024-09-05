let steps = 0;
function collatz(num) {
	if (num == 1) {
		return steps;
	} else if (num % 2 == 0) {
		steps++;
		collatz(num / 2);
	} else if (num % 2 !== 0) {
		steps++;
		collatz(3 * num + 1);
	}
	return steps;
}

collatz(6);
console.log(steps);
