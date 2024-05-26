import { useInfiniteQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { RecipeQuery } from '../App';

export interface Recipe {
	id: number;
	title: string;
	image: string;
}

interface FetchRecipesResponse {
	number: number;
	results: Recipe[];
	totalResults: number;
}

const useRecipes = (query: RecipeQuery) => {
	async function fetchRecipes({ pageParam = 1 }) {
		const response = await apiClient.get<FetchRecipesResponse>(
			'/complexSearch',
			{
				params: {
					number: query.pageSize,
					offset: (pageParam - 1) * query.pageSize,
					includeIngredients: query.ingredients?.join(','),
					intolerances: query.intolerances?.join(','),
				},
			}
		);
		return response.data.results;
	}

	return useInfiniteQuery<Recipe[]>({
		queryKey: ['recipes', query],
		queryFn: fetchRecipes,
		staleTime: 1 * 60 * 1000,
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			if (lastPage.length === 0) return undefined;
			return allPages.length + 1;
		},
	});
};

export default useRecipes;
