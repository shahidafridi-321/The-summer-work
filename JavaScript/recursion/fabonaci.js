// loop version of fabonaci series
function fabLoop(num) {
	if (num <= 1) {
		return num;
	}
	let prev = 0;
	let next = 1;
	for (let i = 2; i <= num; i++) {
		let sum = prev + next;
		prev = next;
		next = sum;
	}
	return next;
}
/* console.log(fabLoop(4));
console.log(fabLoop(7));
console.log(fabLoop(77));
 */
// recursion version of fabonaci series

function fabRecursion(num) {
	if (num <= 1) {
		return num;
	} else {
		return fabRecursion(num - 1) + fabRecursion(num - 2);
	}
}
console.log(fabRecursion(3));
console.log(fabRecursion(7));
//console.log(fabRecursion(77));
