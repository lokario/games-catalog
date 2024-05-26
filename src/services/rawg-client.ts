import axios, { CanceledError } from "axios";

export { CanceledError };

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "90af0af8655c4c4393c6b7bcb59c2e5f",
	},
});
