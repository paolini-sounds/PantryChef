import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";

const RecipeGrid = () => {
	const { data: recipes, error, isLoading } = useRecipes();

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding='10px'
				spacing={6}
			>
				{recipes?.map((recipe) => (
					<GridItem>
						<RecipeCard key={recipe.id} recipe={recipe} />
					</GridItem>
				))}
			</SimpleGrid>
		</>
	);
};

export default RecipeGrid;
