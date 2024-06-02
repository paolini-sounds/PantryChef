import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/apiClient';
import useRecipeQueryStore from '../store';

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

const useRecipes = () => {
	const recipeQuery = useRecipeQueryStore((s) => s.recipeQuery);
	const names = recipeQuery.ingredients?.map((ingredient) => ingredient.name);
	const ingredients = names?.join(',');

	return useInfiniteQuery<FetchResponse<Recipe>, Error>({
		queryKey: ['recipes', recipeQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient
				.getAll({
					params: {
						number: recipeQuery.pageSize,
						offset: ((pageParam as number) - 1) * recipeQuery.pageSize,
						includeIngredients: ingredients,
						excludeIngredients: recipeQuery.excludeParams,
					},
				})
				.then((response) => ({
					...response,
					number: response.results.length,
					offset: 0,
					totalResults: response.results.length,
				})),
		staleTime: 24 * 60 * 60 * 1000,
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			if (!lastPage || !lastPage.results || lastPage.results.length === 0)
				return undefined;
			return allPages.length + 1;
		},
	});
};
export default useRecipes;
