import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/apiClient';
import { RecipeQuery } from './useQueryParams';
import recipes from '../data/recipes';
import { useEffect } from 'react';

export const apiClient = new APIClient<Recipe>('/complexSearch');

export interface Recipe {
	id: number;
	title: string;
	image: string;
	readyInMinutes: number;
	servings: number;
	diets: string[];
	spoonacularScore: number;
	glutenFree: boolean;
	dairyFree: boolean;
	vegan: boolean;
	vegetarian: boolean;
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
			apiClient
				.getAll({
					params: {
						number: query.pageSize,
						offset: ((pageParam as number) - 1) * query.pageSize,
						includeIngredients: ingredients,
						excludeIngredients: query.excludeParams,
					},
				})
				.then((response) => ({
					...response,
					number: response.results.length,
					offset: 0,
					totalResults: response.results.length,
				})),
		staleTime: 1 * 60 * 1000,
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			if (!lastPage || !lastPage.results || lastPage.results.length === 0)
				return undefined;
			return allPages.length + 1;
		},
		// initialData: {
		// 	number: recipes.results.length,
		// 	data: recipes.results,
		// 	pageParams: [0],
		// 	pages: [],
		// },
	});
};
export default useRecipes;
