import { Heading } from '@chakra-ui/react';
import { RecipeQuery } from '../App';

interface Props {
	recipeQuery: RecipeQuery;
}

const GridHeading = ({ recipeQuery }: Props) => {
	return (
		<Heading as='h1' size='xl' paddingBottom='10'>
			{recipeQuery.ingredients ? 'Results' : 'Trending Recipes'}
		</Heading>
	);
};

export default GridHeading;
