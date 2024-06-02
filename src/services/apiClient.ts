import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
	number: number;
	offset: number;
	results: T[];
	totalResults: number;
}

const axiosInstance = axios.create({
	baseURL:
		'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY as string,
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	// getAll = (config: AxiosRequestConfig) => {
	// 	return axiosInstance
	// 		.get<FetchResponse<T>>(this.endpoint, config)
	// 		.then((res) => res.data);
	// };

	getAll = (config: AxiosRequestConfig) => {
		let initData = {};
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => {
				initData = res.data;
				return res.data; // Return res.data
			})
			.then((data: FetchResponse<T> | void) => {
				// Extract the recipe IDs from the data
				const recipeIds = data?.results.map((recipe: any) => recipe.id) || [];
				// Fetch the bulk data using the recipe IDs
				return this.getBulkData({
					...config,
					params: { ids: recipeIds.join(',') },
				}).then((bulkData) => {
					return { ...initData, results: bulkData };
				});
			});
	};

	getBulkData = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<T[]>('/informationBulk', config)
			.then((res) => res.data);
	};
}

export default APIClient;
