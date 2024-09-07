let numbersArray = [
	66, 77, 6, 2, 3, 4, 22, 31, 222, 13, 898, 76, 44, 2, 0, 9876, 986, 34, 8756,
];
numbersArray = numbersArray.sort();
console.log(numbersArray);

function findNumber(array, start, end, number) {
	if (array.length == 0) {
		return -1;
	}
	let midPoint = Math.floor((start + end) / 2);
	if (number == array[midPoint]) {
		return midPoint;
	}
	if (number < array[midPoint]) {
		return findNumber(array, start, midPoint - 1, number);
	}
	return findNumber(array, midPoint + 1, end, number);
}

console.log(findNumber(numbersArray, 0, numbersArray.length - 1, 986));
