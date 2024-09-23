const guesingGameIsolation = require("./isolation");

test("For Greater Number", () => {
	expect(guesingGameIsolation(22, 1)).toBe("To low");
});
