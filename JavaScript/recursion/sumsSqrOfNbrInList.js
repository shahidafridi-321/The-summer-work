function sumOfSqrOfNbrInList(list) {
	let sum = 0;
	if (list.length === 0) {
		return 0;
	}
	for (let element of list) {
		if (Array.isArray(element)) {
			sum += sumOfSqrOfNbrInList(element);
		} else {
			sum += element * element;
		}
	}
	return sum;
}
console.log(sumOfSqrOfNbrInList([10, [[10], 10], [10]]));

