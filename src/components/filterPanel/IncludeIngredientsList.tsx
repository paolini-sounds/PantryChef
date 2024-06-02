import { Tag, TagLabel, TagCloseButton, Flex } from '@chakra-ui/react';
import useRecipeQueryStore from '../../store';

const IncludeIngredientsList = () => {
	const [recipeQuery, deleteIngredient] = useRecipeQueryStore((s) => [
		s.recipeQuery,
		s.deleteIngredient,
	]);

	if (!recipeQuery.ingredients?.length) {
		return null;
	}

	return (
		<Flex>
			{recipeQuery.ingredients &&
				recipeQuery.ingredients.map((ingredient) => (
					<Tag variant='outline' margin={1} key={ingredient.id}>
						<TagLabel>{ingredient.name}</TagLabel>
						<TagCloseButton onClick={() => deleteIngredient(ingredient.id)} />
					</Tag>
				))}
		</Flex>
	);
};

export default IncludeIngredientsList;
