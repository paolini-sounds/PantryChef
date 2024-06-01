import { Tag, TagLabel, TagCloseButton, Flex } from '@chakra-ui/react';
import { QueryContext } from '../contexts/QueryProvider';
import { useContext } from 'react';

const IncludeIngredientsList = () => {
	const { recipeQuery, dispatch } = useContext(QueryContext);

	if (!recipeQuery.ingredients?.length) {
		return null;
	}

	return (
		<Flex>
			{recipeQuery.ingredients &&
				recipeQuery.ingredients.map((ingredient) => (
					<Tag variant='outline' margin={1} key={ingredient.id}>
						<TagLabel>{ingredient.name}</TagLabel>
						<TagCloseButton
							onClick={() =>
								dispatch({ type: 'DELETE_INGREDIENT', id: ingredient.id })
							}
						/>
					</Tag>
				))}
		</Flex>
	);
};

export default IncludeIngredientsList;
