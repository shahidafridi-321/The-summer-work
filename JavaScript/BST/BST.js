class Node {
	constructor(d) {
		this.data = d;
		this.left = null;
		this.right = null;
	}
}
let root = null;

function sortedArrayToBST(arr, start, end) {
	if (start > end) {
		return;
	}
	let mid = Math.floor((start + end) / 2);
	let node = new Node(arr[mid]);
	node.left = sortedArrayToBST(arr, start, mid - 1);
	node.right = sortedArrayToBST(arr, mid + 1, end);

	return node;
}
let output = [];
function preOrder(node) {
	if (!node) {
		return;
	}

	output.push(node.data);
	preOrder(node.left);
	preOrder(node.right);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

root = sortedArrayToBST(arr, 0, arr.length - 1);

preOrder(root);

console.log(output);

