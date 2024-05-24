import axios from "axios";

export default axios.create({
	baseURL: "https://api.spoonacular.com/recipes",
	headers: {
		"x-api-key": "b7eea566d751493f87399f15368ec888",
	},
	params: {},
});
