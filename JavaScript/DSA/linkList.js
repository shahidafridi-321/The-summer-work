function findPerson(list, name) {
	if (list.value === name) {
		return `${list.value} is present`;
	}
	if (list.value !== name && list.next == null) {
		return `Sorry ${name} is not present`;
	}
	return findPerson(list.next, name);
}

function deleteRecord(list, name) {
	if (!list) {
		return `list is empty`;
	}
	if (list.value !== name && list.next == null) {
		return `record not fount`;
	}
	if (list.value == name && list.next !== null) {
		list.value = list.next.value;
		list.next = list.next.next;
		return list;
	}
	return deleteRecord(list.next, name);
}

let list = {
	value: "shahid",
	next: {
		value: "ali",
		next: {
			value: "kami",
			next: {
				value: "john",
				next: {
					value: "koko",
					next: {
						value: "sahil",
						next: null,
					},
				},
			},
		},
	},
};

console.log(findPerson(list, "koko"));
console.log(deleteRecord(list, "sahil"));
console.log(list);
