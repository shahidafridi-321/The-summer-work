// loop version of fabonaci series
function fabLoop(num) {
	let prev = 0;
	let next = 1;
	let sum = 0;
	for (let i = 2; i <= num; i++) {
		sum = prev + next;
		prev = next;
		next = sum;
	}
	return sum;
}
/* console.log(fabLoop(4));
console.log(fabLoop(7));
console.log(fabLoop(77));
 */
// recursion version of fabonaci series
/* 
number = 3;
return num-1 + fab(num-1)

(3-1) + fab(3-1) = 2+6 return 10;
2 + 1
() + fab(2) = 3+3 return 6;
2 + 1 return 3


*/

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
