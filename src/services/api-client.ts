import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.spoonacular.com/recipes',
	headers: {
		'x-api-key': import.meta.env.VITE_APP_API_KEY as string,
	},
});
