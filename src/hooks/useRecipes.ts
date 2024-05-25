import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

export interface Recipe {
	id: number;
	title: string;
	image: string;
}

interface FetchRecipesResponse {
	number: number;
	results: Recipe[];
	offset: number;
}

interface RecipeQuery {
	pageSize: number;
}

const useRecipes = (query: RecipeQuery) => {
	function fetchRecipes({ pageParam }: { pageParam: unknown }) {
		const offset =
			typeof pageParam === 'number' ? (pageParam - 1) * query.pageSize : 0;
		return apiClient
			.get<FetchRecipesResponse>('/complexSearch', {
				params: {
					number: query.pageSize,
					offset: offset,
				},
			})
			.then((res) => res.data.results);
	}

	return useInfiniteQuery<Recipe[], Error>({
		queryKey: ['recipes', query],
		queryFn: fetchRecipes,
		staleTime: 1 * 60 * 1000,
		initialPageParam: 1, // This is the default value for the initial page parameter
		getNextPageParam: (lastPage, allPages) => {
			if (lastPage.length < query.pageSize) {
				return undefined;
			}
			console.log(lastPage, allPages);
			return allPages.length + 1;
		},
	});
};

export default useRecipes;
