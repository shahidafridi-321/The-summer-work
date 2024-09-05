let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};
/* 
function printLinkList(list) {
	console.log(list);

	for (let subList of Object.values(list)) {
		if (typeof subList == "object") {
			console.log(subList);
			for (let subsubList of Object.values(subList)) {
				if (typeof subsubList == "object") {
					console.log(subsubList);
					for (let subsubsublist of Object.values(subsubList)) {
						if (typeof subsubsublist == "object") {
							console.log(subsubsublist);
						}
					}
				}
			}
		}
	}
}
 */
// loop version
function printLinkList(list) {
	let temp = list;
	while (temp) {
		console.log(temp);
		temp = temp.next;
	}
}

// recursion version
function printLinkListRecursion(list) {
	if (list.next) {
		printLinkListRecursion(list.next);
	}
	console.log(list);
}
/* printLinkList(list); */
printLinkListRecursion(list);
