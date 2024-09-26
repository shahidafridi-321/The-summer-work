import axios from "axios";

class User {
	static all() {
		return axios.get("/users.json").then((resp) => resp.data);
	}
}

module.exports = User;
