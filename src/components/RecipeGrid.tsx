import { useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
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

	const { data: recipes } = useQuery({
		queryKey: ["recipes"],
		queryFn: fetchRecipes,
		staleTime: 10 * 1000,
	});

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
