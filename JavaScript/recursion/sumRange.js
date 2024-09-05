function sumRange(number) {
	if (number == 0) {
		return number;
	} else {
		return number + sumRange(number - 1);
	}
}
console.log(sumRange(3));

