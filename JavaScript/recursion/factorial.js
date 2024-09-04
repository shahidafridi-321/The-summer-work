// using loop
function factLoop(num) {
	let fact = 1;
	while (num > 1) {
		fact *= num;
		num--;
	}
	return fact;
}

console.log(factLoop(5));

// using recursion

function factRecursion(num) {
	if (num == 1) {
		return num;
	} else {
		return num * factRecursion(num - 1);
	}
}

console.log(factRecursion(5));
