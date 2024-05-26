import { useInfiniteQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { RecipeQuery } from './useQueryParams';

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
	const names = query.ingredients?.map((ingredient) => ingredient.name);
	const ingredients = names?.join(',');

	async function fetchRecipes({ pageParam = 1 }) {
		const response = await apiClient.get<FetchRecipesResponse>(
			'/complexSearch',
			{
				params: {
					number: query.pageSize,
					offset: (pageParam - 1) * query.pageSize,
					includeIngredients: ingredients,
					excludeIngredients: query.excludeParams,
				},
			}
		);
		return response.data.results;
	}

	return useInfiniteQuery<Recipe[], Error>({
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
