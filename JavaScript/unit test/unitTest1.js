let someOrder = {
	items: [
		{ name: "Dragon Food", price: 8, quantity: 8 },
		{ name: "Dragon Cage", price: 800, quantity: 2 },
		{ name: "Shipping", price: 40, shipping: true },
	],
};

let orderTotal = (order) => {
	let totalItems = order.items
		.filter((x) => !x.shipping)
		.reduce((pre, cur) => {
			return pre + cur.price * cur.quantity;
		}, 0);

	let shippingItem = order.items.find((x) => x.shipping);
	let shipping = totalItems > 1000 ? 0 : shippingItem.price;
	return totalItems + shipping;
};

let arr = orderTotal(someOrder);



