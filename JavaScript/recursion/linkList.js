// creating a linked list
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

// spliting the list in two
let secondList = list.next.next;
list.next.next = null;

// joining agian
list.next.next = secondList;

// prepend/add value to list at any position (here in start)
list = { value: 0, next: list };
/* console.log(list); */

// remove value at any position

list.next = list.next.next;

console.log(list);

// sum all the values in list
function sumLintListValues(list) {
	if (list.next === null) {
		sum += list.value;
		return sum;
	} else {
		return list.value + sumLintListValues(list.next);
	}
}

console.log(sumLintListValues(list));
