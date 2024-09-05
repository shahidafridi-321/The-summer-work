function pow(base, exp) {
	if (exp == 0) {
		return 1;
	} else {
		return base * pow(base, exp - 1);
	}
}

console.log(pow(2, 4));
console.log(pow(2, 3));
console.log(pow(2, 2));
console.log(pow(2, 1));
console.log(pow(2, 0));
