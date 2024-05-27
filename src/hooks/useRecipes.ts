import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/apiClient';
import { RecipeQuery } from './useQueryParams';

const apiClient = new APIClient<Recipe>('/complexSearch');

export interface Recipe {
	id: number;
	title: string;
	image: string;
}

// interface FetchRecipesResponse {
// 	number: number;
// 	results: Recipe[];
// 	totalResults: number;
// }

const useRecipes = (query: RecipeQuery) => {
	const names = query.ingredients?.map((ingredient) => ingredient.name);
	const ingredients = names?.join(',');

	return useInfiniteQuery<FetchResponse<Recipe>, Error>({
		queryKey: ['recipes', query],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					number: query.pageSize,
					offset: ((pageParam as number) - 1) * query.pageSize,
					includeIngredients: ingredients,
					excludeIngredients: query.excludeParams,
				},
			}),
		staleTime: 1 * 60 * 1000,
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			if (lastPage.results.length === 0) return undefined;
			return allPages.length + 1;
		},
	});
};

export default useRecipes;
