import axios from "axios";

import User from "./user";

jest.mock("axios");

test("should fetch users", () => {
	let users = [{ name: "shahid" }];
	let resp = { data: users };
	axios.get.mockResolvedValue(resp);

	return User.all().then((data) => expect(data).toEqual(users));
});
