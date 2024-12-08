import axios from "axios";

const baseUrl = "http://localhost:3003/persons";

const getAll = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

const create = async (newObject) => {
	const response = axios.post(baseUrl, newObject);
	return (await response).data;
};

export default {
	getAll,
	create,
};
