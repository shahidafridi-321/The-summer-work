const sum = require("./sum");

test("add 1 + 2 = 3", () => {
	expect(sum(1, 2)).toBe(3);
});

test("add 0 + 0 = 0", () => {
	expect(sum(0, 0)).toBe(0);
});
