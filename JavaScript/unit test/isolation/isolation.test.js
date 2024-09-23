const guesingGameIsolation = require("./isolation");

test("For Greater Number", () => {
	expect(guesingGameIsolation(22, 1)).toBe("To low");
});


test("For Greater Number", () => {
	expect(guesingGameIsolation(1, 3)).toBe("To high");
});
