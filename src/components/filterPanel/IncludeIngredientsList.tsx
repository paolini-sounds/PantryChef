import { Heading, Tag, TagLabel, TagCloseButton, Box } from '@chakra-ui/react';

import {
	Key,
	ReactElement,
	JSXElementConstructor,
	ReactNode,
	ReactPortal,
} from 'react';
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
		<Box
			minHeight={{ sm: '0', lg: '50px' }}
			height={{ sm: '100%', lg: '35%' }}
			width={{ sm: '35%', lg: '100%' }}
		>
			{/* <Heading paddingY={3} fontWeight='light' fontSize='md'>
				Results include:
			</Heading> */}
			{recipeQuery.ingredients &&
				recipeQuery.ingredients.map((ingredient) => (
					<Tag variant='outline' margin={1} key={ingredient.id}>
						<TagLabel>{ingredient.name}</TagLabel>
						<TagCloseButton onClick={() => removeIngredient(ingredient?.id)} />
					</Tag>
				))}
		</Box>
	);
};

export default IncludeIngredientsList;
