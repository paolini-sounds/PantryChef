import { Tag, TagLabel, TagCloseButton, Flex } from '@chakra-ui/react';

import { RecipeQuery } from '../../hooks/useQueryParams';

interface Props {
	recipeQuery: RecipeQuery;
	removeIngredient: (id: string) => void;
}

const IncludeIngredientsList = ({ recipeQuery, removeIngredient }: Props) => {
	if (!recipeQuery.ingredients?.length) {
		return null;
	}

	return (
		<Flex>
			{recipeQuery.ingredients &&
				recipeQuery.ingredients.map((ingredient) => (
					<Tag variant='outline' margin={1} key={ingredient.id}>
						<TagLabel>{ingredient.name}</TagLabel>
						<TagCloseButton onClick={() => removeIngredient(ingredient?.id)} />
					</Tag>
				))}
		</Flex>
	);
};

export default IncludeIngredientsList;
