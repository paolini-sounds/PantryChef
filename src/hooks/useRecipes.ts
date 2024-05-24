import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Recipe {
	id: number;
	title: string;
	image: string;
}

interface FetchRecipesResponse {
	number: number;
	results: Recipe[];
}

const useTodos = () => {
	const fetchRecipes = () =>
		apiClient
			.get<FetchRecipesResponse>("/complexSearch")
			.then((res) => res.data.results);

	return useQuery<Recipe[], Error>({
		queryKey: ["recipes"],
		queryFn: fetchRecipes,
		staleTime: 10 * 1000,
	});
};

export default useTodos;
