const orderTotal = require("./order-total");

it("quantity", () => {
	expect(
		orderTotal({
			items: [
				{
					name: "dragon",
					price: 10,
					quantity: 2,
				},
			],
		})
	).toBe(20);
});

it("no qauntity", () => {
	expect(
		orderTotal({
			items: [
				{ name: "dragon cage", price: 2 },
				{ name: "dragon food", price: 8 },
			],
		})
	).toBe(10);
});

it("price and quantity", () => {
	let result = orderTotal({
		items: [
			{
				name: "dragons",
				price: 100,
				quantity: 5,
			},
			{
				name: "cats",
				price: 200,
			},
		],
	});

	expect(result).toBe(700);
});
