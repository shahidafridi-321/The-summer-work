// using loop
function sumTo(number) {
	let sum = 0;
	for (let i = number; i > 0; i--) {
		sum += i;
	}
	return sum;
}
console.log(sumTo(100));

// using recursion

function sumToRecursion(number) {
	if (number == 1) {
		return number;
	} else {
		return number + sumToRecursion(number - 1);
	}
}

console.log(sumToRecursion(100));

// using arithematic propegation formula

function sumToAP(number) {
	return (number * (number + 1)) / 2;
}

console.log(sumToAP(100));
