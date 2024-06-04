import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { Recipe } from '../entities/Recipe';

const apiClient = new APIClient<Recipe>('/');

const useRecipe = (id: string) =>
	useQuery({
		queryKey: ['games', id.toString],
		queryFn: () => apiClient.get(id),
	});

export default useRecipe;
