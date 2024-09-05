function totalIntegers(array) {
	let counter = 0;
	for (let element of array) {
		if (typeof element === "number") {
			counter++;
		} else if (Array.isArray(element)) {
			counter += totalIntegers(element);
		}
	}
	return counter;
}

console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]])); // Output: 7

/* 
var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
let counter = 0;
function totalIntegers(array) {
	if (array.length === 0) {
		return 0;
	}
	let total = 0;
	let first = array.shift();
	if (Array.isArray(first)) {
		total += totalIntegers(first);
	} else if (Number.isInteger(first)) {
		total += 1;
	}
	return total + totalIntegers(array);
}

console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));
 */
