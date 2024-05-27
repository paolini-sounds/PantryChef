import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.spoonacular.com/recipes',
	headers: {
		'x-api-key': process.env._API_KEY as string,
	},
});
