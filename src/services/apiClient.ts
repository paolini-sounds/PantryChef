import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
	number: number;
	offset: number;
	results: T[];
	totalResults: number;
}

const axiosInstance = axios.create({
	baseURL: 'https://api.spoonacular.com/recipes',
	headers: {
		'x-api-key': import.meta.env.VITE_APP_API_KEY as string,
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};
}

export default APIClient;
