import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

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
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [error, setError] = useState("");
	console.log(error);

	useEffect(() => {
		apiClient
			.get<FetchRecipesResponse>("/complexSearch")
			.then((res) => setRecipes(res.data.results))
			.catch((err) => setError(err.message));
	}, []);

	if (error) return <Text>{error}</Text>;
	return (
		<>
			<ul>
				{recipes.map((recipe) => (
					<li>{recipe.title}</li>
				))}
			</ul>
		</>
	);
};

export default RecipeGrid;
