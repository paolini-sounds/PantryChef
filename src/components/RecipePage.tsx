import { Recipe } from '../hooks/useRecipes';
import { Heading } from '@chakra-ui/react';

interface Props {
	recipe: Recipe;
}

const RecipePage = ({ recipe }: Props) => {
	return <Heading>{recipe.title}</Heading>;
};

export default RecipePage;
