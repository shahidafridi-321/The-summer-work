function reputaion(times, number) {
	if (times <= 0) {
		return [];
	}
	return [number].concat(reputaion(times - 1, number));
}
console.log(reputaion(3, 5));
