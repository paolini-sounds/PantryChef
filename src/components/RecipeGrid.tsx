import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Recipe {
	id: number;
	title: string;
	image: string;
}

interface FetchRecipesResponse {
	number: number;
	results: Recipe[];
}

const RecipeGrid = () => {
	const fetchRecipes = () =>
		apiClient
			.get<FetchRecipesResponse>("/complexSearch")
			.then((res) => res.data.results);

	const {
		data: recipes,
		error,
		isLoading,
	} = useQuery<Recipe[], Error>({
		queryKey: ["recipes"],
		queryFn: fetchRecipes,
		staleTime: 10 * 1000,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<ul>
				{recipes?.map((recipe) => (
					<li>{recipe.title}</li>
				))}
			</ul>
		</>
	);
};

export default RecipeGrid;
