import { Heading } from '@chakra-ui/react';
import useRecipeQueryStore from '../stores/recipeQueryStore';

const GridHeading = () => {
	const recipeQuery = useRecipeQueryStore((s) => s.recipeQuery);
	const results =
		recipeQuery.ingredients?.length ||
		recipeQuery.diets?.length ||
		recipeQuery.intolerances?.length ||
		recipeQuery.excludeParams?.length;

	return (
		<Heading as='h1' size='xl' paddingY='5' paddingLeft={5}>
			{results ? 'Results' : 'Popular Recipes'}
		</Heading>
	);
};

export default GridHeading;
