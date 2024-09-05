function all(array, callBack) {
	if (array.length === 0) {
		return true;
	}
	if (!callBack(array[0])) {
		return false;
	}
	return all(array.slice(1), callBack);
}
function allLessthanSeven(num) {
	return num < 10;
}
console.log(all([1, 2, 9], allLessthanSeven));
